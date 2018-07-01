"use strict";

/** Functions for manipulating the Opf file */
class Opf {
    constructor(dom, zipObjectName) {
        this.dom = dom;
        this.zipPath = this.extractPath(zipObjectName);
        this.items = [...dom.querySelectorAll("manifest item")]
            .reduce(function(prev, curr) {
                prev.set(curr.getAttribute("id"), curr);
                return prev;
            }, new Map());
    }

    extractPath(zipObjectName) {
        let path = zipObjectName.split("/");
        path = path.slice(0, path.length - 1);
        path = path.join("/");
        if (0 < path.length){
            path += "/"
        }
        return path;
    }

    xhtmlNames() {
        return [...this.spine()]
            .map(itemref => itemref.getAttribute("idref"))
            .filter(idref => idref !== "cover")
            .map(idref => this.zipPath + this.items.get(idref).getAttribute("href"))
    }

    imageFileItems() {
        let images = [];
        for(let item of this.items.values()) {
            if (item.getAttribute("media-type").startsWith("image/")) {
                images.push(item);
            }
        }
        return images;
    }

    spine() {
        return this.dom.querySelectorAll("spine itemref");
    }

    makeFullPath(partial) {
        return this.zipPath + partial;
    }

    zipNameForItem(item) {
        return this.makeFullPath(item.getAttribute("href"));
    }

    removeItems(items) {
        for(let item of items) {
            let id = item.id;
            let itemref = this.dom.querySelector("spine itemref[idref='"+id+"']");
            if (itemref !== null) {
                itemref.remove();
            }
            let source = this.dom.querySelector("metadata [id='id."+id+"']");
            if (source !== null) {
                source.remove();
            }
            item.remove();
        }
    }
}

class ImageRemover {
    constructor(opf, imagesToRemove) {
        this.zipNames = new Set();
        for(let item of imagesToRemove) {
            this.zipNames.add(opf.zipNameForItem(item));
        }
    }

    removeTagsForImages(dom, zipName) {
        for(let element of dom.querySelectorAll("img, image")) {
            if (this.isImageToRemove(element, zipName)) {
                this.remove(element);
            }
        }
    }

    isImageToRemove(element, zipName) {
        let attribName = (element.tagName.toUpperCase() === "IMG") ? "src" : "xlink:href";
        let src = this.resolveZipName(element.getAttribute(attribName), zipName);
        return this.zipNames.has(src);
    }

    remove(element) {
        if (element.tagName.toUpperCase() === "IMG") {
            element.remove();
        } else {
            element.parentElement.remove();
        }
    }

    resolveZipName(ref, zipNameHoldingRef) {
        let origin = zipNameHoldingRef.split("/");
        origin = origin.slice(0, origin.length - 1);
        let refBits = ref.split("/");
        while(refBits[0] === "..") {
            if (0 < origin.length) {
                origin = origin.slice(0, origin.length - 1);
            }
            refBits = refBits.slice(1, refBits.length);
        }
        return origin.concat(refBits).join("/");
    }
}

class Epub {
    constructor() {
        this.zip = null;
        this.zipObjects = new Map();
        this.opf = null;
    }

    /** Read file object, assumed to be an epub */
    load(file) {
        let that = this;
        return this.loadFileToArrayBuffer(file)
            .then(array => new JSZip().loadAsync(array))
            .then(zip => this.buildListOfFiles(zip))
            .then(() => this.locateOpf())
            .then(opfName => this.parseOpf(opfName))
    } 

    /** Write the watermark to end of each XHTML file (excluding cover) in epub */
    watermarkContent(watermark) {
        let that = this;
        let sequence = Promise.resolve();
        for(let zipObjectName of this.opf.xhtmlNames()) {
            sequence = sequence.then(function () {
                return that.watermarkFile(zipObjectName, watermark);
            });                
        }
        return sequence;
    }

    /** Write modified epub to disk with requested filename */
    save(filename) {
        // need to make a copy of the zip file, otherwise files are not 
        // compressed.
        return this.copyZip()
            .then(newZip => newZip.generateAsync({ type: "blob" }))
            .then(blob => this.writeToDisk(filename, blob));
    }

    /* private */
    needsWatermark(file) {
        // ToDo, replace this with real logic
        return file.name === "OEBPS/Text/0001_1_Chapter_...sing_Death.xhtml";
    }

    watermarkFile(zipObjectName, watermark) {
        let that = this;
        return this.extractXhtnml(zipObjectName).then(function (dom){
            console.log("Updating " + zipObjectName);
            let div = dom.createElementNS("http://www.w3.org/1999/xhtml", "div");
            div.innerHTML = watermark;
            dom.body.appendChild(div);
            return that.replaceZipObject(zipObjectName, dom);
        });        
    }

    /** private */
    loadFileToArrayBuffer(file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function(e) {
                resolve(e.target.result);
            }
            reader.readAsArrayBuffer(file);
        });
    }

    /** private */
    buildListOfFiles(zip) {
        this.zip = zip;
        let zipObjects = new Map();
        this.zipObjects = zipObjects;
        this.zip.forEach(function (relativePath, file) {
            if (!file.dir) {
                zipObjects.set(file.name, file);
            }
        });
    }

    /* private */
    copyZip() {
        let that = this;
        let newZip = new JSZip();
        var sequence = Promise.resolve();
        this.zip.forEach(function (relativePath, file) {
            if (!file.dir) {
                sequence = sequence.then(function () {
                    return that.copyFile(file, newZip);
                });
            }
        });
        sequence = sequence.then(() => Promise.resolve(newZip));
        return sequence;
    }

    /** private */
    copyFile(file, newZip) {
        let that = this;
        return file.async("blob").then(function (blob){
            let options = that.createZipOptions(file);
            return newZip.file(file.name, blob, options);
        });
    }

    /** private */
    createZipOptions(file) {
        let options = {
            date: file.date,
        };
        if (this.isCompressed(file)) {
            options.compression = "DEFLATE";
        }
        return options;
    }

    /** private */
    isCompressed(file) {
        if (file.options.compression === "DEFLATE") {
            return true;
        };
        let data = file["_data"];
        if (data !== undefined) {
            return data.compressedSize < data.uncompressedSize;
        }
        return false;
    }

    /** private */
    writeToDisk(filename, blob) {
        let options = {
            url: URL.createObjectURL(blob),
            saveAs: true
        };
        let cleanup = () => { URL.revokeObjectURL(options.url); };
        let clickEvent = new MouseEvent("click", {
            "view": window,
            "bubbles": true,
            "cancelable": false
        });
        let a = document.createElement("a");
        a.href = options.url;
        a.download = filename;
        a.dispatchEvent(clickEvent);
        const oneMinute = 60 * 1000;
        setTimeout(cleanup, oneMinute);
        return Promise.resolve();
    }

    extractXhtnml(zipObjectName) {
        let file = this.zipObjects.get(zipObjectName);
        return file.async("text").then(function (text){
            return new DOMParser().parseFromString(text, "application/xml");
        });
    }
    
    locateOpf() {
        return this.extractXhtnml("META-INF/container.xml").then(function (container) {
            return container.querySelector("rootfile").getAttribute("full-path");
        });
    }
    
    parseOpf(opfName) {
        let that = this;
        return this.extractXhtnml(opfName).then(function (dom) {
            that.opf = new Opf(dom, opfName);
        });
    }

    findZeroSizeImages() {
        let opf = this.opf;
        let toRemove = opf.imageFileItems()
            .filter(item => this.isZeroLength(opf.zipNameForItem(item)));
        return toRemove;
    }

    removeTagsForImages(imagesToRemove) {
        let remover = new ImageRemover(this.opf, imagesToRemove);
        let sequence = Promise.resolve();
        let that = this;
        for(let zipObjectName of this.opf.xhtmlNames()) {
            sequence = sequence.then(function () {
                return that.extractXhtnml(zipObjectName);
            }).then(function(dom) {
                remover.removeTagsForImages(dom, zipObjectName);
                return that.replaceZipObject(zipObjectName, dom);
            });                
        }
        return sequence;
    }

    replaceZipObject(zipObjectName, newDom) {
        let text = new XMLSerializer().serializeToString(newDom);
        let file = this.zipObjects.get(zipObjectName);
        let options = this.createZipOptions(file);
        return this.zip.file(zipObjectName, text, options);
    }

    removeItems(items) {
        for(let i of items) {
            this.zip.remove(this.opf.zipNameForItem(i));
        };
        this.opf.removeItems(items);
        return this.replaceZipObject(this.opf.zipObjectName, this.opf.dom);
    }

    listImagesInViewOrder() {
        let sequence = Promise.resolve();
        let that = this;
        let images = [];
        for(let zipObjectName of this.opf.xhtmlNames()) {
            sequence = sequence.then(function () {
                return that.extractXhtnml(zipObjectName);
            }).then(function(dom) {
                for(let element of dom.querySelectorAll("img, image")) {
                    let attribName = (element.tagName.toUpperCase() === "IMG") ? "src" : "xlink:href";
                    let src = element.getAttribute(attribName).split("/");
                    images.push(src[src.length - 1]);
                }
            });                
        }
        return sequence.then(
            () => images
        );
    }

    isZeroLength(zipObjectName) {
        let size = this.zipObjects.get(zipObjectName)._data.uncompressedSize;
        return size === undefined || size === 0;
    }
}
