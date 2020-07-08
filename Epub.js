"use strict";

/** Functions for manipulating the Opf file */
class Opf {
    constructor(dom, zipObjectName) {
        this.dom = dom;
        this.zipObjectName = zipObjectName;
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
        let modified = false;
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
            modified = true;
        }
        return modified;
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
        let modified = false;
        for(let element of dom.querySelectorAll("img, image")) {
            if (this.isImageToRemove(element, zipName)) {
                modified = true;
                this.remove(element);
            }
        }
        return modified;
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
        let watermarkFile = function(dom) {
            let div = dom.createElementNS("http://www.w3.org/1999/xhtml", "div");
            div.innerHTML = watermark;
            dom.body.appendChild(div);
            return true;
        };
        return this.processEachXhtmlFile(watermarkFile);
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
            return new DOMParser().parseFromString(text, "text/html");
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

    findAllImagesExceptCover() {
        return this.opf.imageFileItems()
            .filter(item => item.getAttribute("id") !== "cover-image");
    }

    removeTagsForImages(imagesToRemove) {
        let remover = new ImageRemover(this.opf, imagesToRemove);
        let mutator = (dom, zipObjectName) => remover.removeTagsForImages(dom, zipObjectName);
        return this.processEachXhtmlFile(mutator);
    }

    removeElementsMatchingCss(css) {
        let mutator = function(dom, zipObjectName) {
            let altered = false;
            for(let e of dom.querySelectorAll(css)) {
                e.remove();
                altered = true;
            }
            return altered;
        }
        return this.processEachXhtmlFile(mutator);
    }

    cleanChrysanthemumGarden(css) {
        let decryptTable = new Map();
        let crypt = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let clear = "tonquerzlawicvfjpsyhgdmkbxJKABRUDQZCTHFVLIWNEYPSXGOM";
        for(let i = 0; i < crypt.length; ++i) {
            decryptTable.set(crypt[i], clear[i]);
        }
        let decryptChar = c => decryptTable.get(c) ?? c;
        let decryptString = cypherText => cypherText.split("").map(c => decryptChar(c)).join("");

        let mutator = function(dom, zipObjectName) {
            for(let e of dom.querySelectorAll("span.jum")) {
                e.textContent = decryptString(e.textContent);
            }
            [...dom.querySelectorAll("span, p, h2")]
                .filter(e => e.style.height === "1px")
                .forEach(e => e.remove())
            return true;
        }
        return this.processEachXhtmlFile(mutator);
    }

    

    sanitizeXhtml() {
        let mutator = function(dom, zipObjectName) {
            let newBody = new Sanitize().clean(dom.body);
            dom.body = newBody;
            return true;
        }
        return this.processEachXhtmlFile(mutator);
    }

    processEachXhtmlFile(mutator) {
        let sequence = Promise.resolve();
        let that = this;
        for(let zipObjectName of this.opf.xhtmlNames()) {
            sequence = sequence.then(function () {
                return that.extractXhtnml(zipObjectName);
            }).then(function(dom) {
                let modified = mutator(dom, zipObjectName);
                return that.replaceZipObject(zipObjectName, dom, modified);
            });                
        }
        return sequence;
    }

    checkForInvalidXhtml() {
        let sequence = Promise.resolve();
        let bad = [];
        let that = this;
        for(let zipObjectName of this.opf.xhtmlNames()) {
            sequence = sequence.then(function () {
                let file = that.zipObjects.get(zipObjectName);
                return file.async("text")
            }).then(function(text) {
                let error = that.findXhtmlError(text);
                if (error != null) {
                    bad.push({zipObjectName, error: error.textContent});
                }
            });                
        }
        return sequence.then(() => bad);
    }

    extractImages(filename, startChapterIndex) {
        let newZip = new JSZip();
        let sequence = Promise.resolve();
        let that = this;
        let chapterIndex = startChapterIndex;
        for(let zipObjectName of this.opf.xhtmlNames()) {
            let chapterName = ("00" + chapterIndex);
            chapterName = "c" + chapterName.substring(chapterName.length - 3);
            ++chapterIndex;
            sequence = sequence.then(function () {
                return that.extractXhtnml(zipObjectName);
            }).then(function(dom) {
                return that.copyImages(newZip, dom, chapterName);
            });                
        }
        return sequence
            .then(newZip => newZip.generateAsync({ type: "blob" }))
            .then(blob => this.writeToDisk(filename, blob));
    }

    copyImages(newZip, dom, chapterName) {
        let that = this;
        let sequence = Promise.resolve();
        let index = 0;
        for(let element of dom.querySelectorAll("image")) {
            sequence = sequence.then(function () {
                let src = element.getAttribute("xlink:href");
                let desc = src.split("/");
                let leaf = that.makeLeafName(++index, desc[desc.length - 1]);
                if (999 < index) {
                    throw new Error("Too many images in chaper");
                }
                let oldZipObjectname = "OEBPS" + src.substring(2);  // ToDo  Do this properly.
                let newZipObjectName = chapterName + "/" + leaf;
                console.log(`"${newZipObjectName}, "${desc}"`);
                return that.copyImage(newZip, oldZipObjectname, newZipObjectName);
            });
        };
        return sequence;
    }

    makeLeafName(index, originalName) {
        let ext = originalName.substring(originalName.lastIndexOf("."));
        let name = ("00" + index);
        name = name.substring(name.length - 3);
        return name + ext;
    }

    copyImage(newZip, oldZipObjectname, newZipObjectName) {
        let that = this;
        let file = this.zipObjects.get(oldZipObjectname);
        return file.async("blob").then(function (blob){
            let options = that.createZipOptions(file);
            return newZip.file(newZipObjectName, blob, options);
        });
    }

    findXhtmlError(xhtmlAsString) {
        let doc = new DOMParser().parseFromString(xhtmlAsString, "application/xml");
        return doc.querySelector("parsererror");
        return (parsererror === null) ? null : parsererror.textContent;
    }

    replaceZipObject(zipObjectName, newDom, modified) {
        if (modified) {
            let text = new XMLSerializer().serializeToString(newDom);
            text = this.patchHtmlConversion(text);
            let file = this.zipObjects.get(zipObjectName);
            let options = this.createZipOptions(file);
            return this.zip.file(zipObjectName, text, options);
        }
    }

    patchHtmlConversion(textToFix) {
        return textToFix.replace("<!--?xml version=\"1.0\" encoding=\"utf-8\"?-->", 
            "<?xml version=\"1.0\" encoding=\"utf-8\"?>");
    }

    removeItems(items) {
        for(let i of items) {
            this.zip.remove(this.opf.zipNameForItem(i));
        };
        let modified = this.opf.removeItems(items);
        return this.replaceZipObject(this.opf.zipObjectName, this.opf.dom, modified);
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
