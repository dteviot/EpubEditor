"use strict";

class Main {
    constructor() {
        this.epub = new Epub();
    }   

    dragOverHandler(ev) {
        console.log('File(s) in drop zone'); 
      
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
    }    

    dropHandler(ev) {
        console.log('File(s) dropped');
      
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
      
        let file = null;
        if (ev.dataTransfer.items) {
          // Use DataTransferItemList interface to access the file(s)
            for (let i = 0; i < ev.dataTransfer.items.length; i++) {
            // If dropped items aren't files, reject them
                if (ev.dataTransfer.items[i].kind === 'file') {
                    file = ev.dataTransfer.items[i].getAsFile();
                    // only process first file
                    break;
                }
            }
        } else {
          // Use DataTransfer interface to access the file(s)
            if (0 < ev.dataTransfer.files.length) {
                file = ev.dataTransfer.files[0];
            }
        }
        this.processFile(file, ev);
    }

    processFile(file, ev) {
        if (file !== null) {
            console.log('... file.name = ' + file.name);
            this.fileName = file.name;
            this.epub = new Epub();
            this.resetUI();
            return this.epub.load(file)
                .then(() => this.removeDragData(ev))
                .then(() => this.onEpubLoaded())
                .catch(e => window.alert(e));
        }
    }    

    removeDragData(ev) {
        if (ev == null) {
            return;
        }

        console.log('Removing drag data')
      
        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to remove the drag data
            ev.dataTransfer.items.clear();
        } else {
            // Use DataTransfer interface to remove the drag data
            ev.dataTransfer.clearData();
        }
    }

    onFileNameInputChange(fileNameInput) {
        this.processFile(fileNameInput.files[0], null);
    }

    onEpubLoaded() {
        document.getElementById("controls").hidden = false;
    }

    checkForInvalidXhtml() {
        let that = this;
        this.epub.checkForInvalidXhtml().then(function (invalid) {
            let header = document.getElementById("listHeader");
            header.textContent = (0 == invalid.length) ? "No invalid files found" : "Following XHTML files are not valid";
            that.populateList(invalid.map(i => i.zipObjectName));
        });
    }

    checkForZeroSizeImages() {
        let images = this.epub.findZeroSizeImages();
        let headerText = (0 == images.length) ? "No zero size images found" : "Following zero size images found";
        let header = document.getElementById("listHeader");
        header.textContent = headerText;
        this.populateList(images.map(i => i.outerHTML));
    }

    extractImages() {
        return this.epub.extractImages("test.zip", 1)
            .catch(e => window.alert(e));
    }

    waterMarkEpub() {
        let watermark = document.getElementById("watermark").value;
        let epub = this.epub;
        return epub.watermarkContent(watermark)
            .then(() => epub.save(this.fileName, "application/epub+zip"));
    }

    removeElementsMatchingCss() {
        let css = document.getElementById("removeCssInput").value;
        let epub = this.epub;
        return epub.removeElementsMatchingCss(css)
            .then(() => epub.save(this.fileName, "application/epub+zip"));
    }

    cleanChrysanthemumGarden() {
        let css = document.getElementById("removeCssInput").value;
        let epub = this.epub;
        return epub.cleanChrysanthemumGarden(css)
            .then(() => epub.save(this.fileName, "application/epub+zip"));
    }

    runScript() {
        let script = document.getElementById("mutatorScriptInput").value;
        let epub = this.epub;
        return epub.runScript(script)
            .then(() => epub.save(this.fileName, "application/epub+zip"));
    }

    sanitizeXhtml() {
        let epub = this.epub;
        return epub.sanitizeXhtml()
            .then(() => epub.save(this.fileName, "application/epub+zip"));
    }
    
    convertTableToDiv() {
        let epub = this.epub;
        return epub.convertTableToDiv()
            .then(() => epub.save(this.fileName, "application/epub+zip"));
    }

    appendSourceLinkInEachChapter() {
        let epub = this.epub;
        return epub.appendSourceLinkInEachChapter()
            .then(() => epub.save(this.fileName, "application/epub+zip"));
    }

    removeZeroSizeImages() {
        return this.removeImages(this.epub.findZeroSizeImages());
    }

    removeAllImages() {
        return this.removeImages(this.epub.findAllImagesExceptCover());
    }

    removeImages(images) {
        return this.epub.removeTagsForImages(images)
            .then(() => this.epub.removeItems(images))
            .then(() => this.epub.save(this.fileName, "application/epub+zip"));
    }

    listImagesInViewOrder() {
        return this.epub.listImagesInViewOrder()
            .then(images => this.dumpImageNames(images));
    }

    dumpImageNames(items) {
        let listElement = document.getElementById("fileList");
        let expected = 0;
        for(let item of items) {
            let li = document.createElement("li");
            li.textContent = item;
            let actual = parseInt(item);
            if (actual != expected) {
                li.style = "color: red;";
            }
            expected = actual + 1;
            listElement.appendChild(li);
        }
    }

    populateList(items) {
        let listElement = document.getElementById("fileList");
        for(let item of items) {
            let li = document.createElement("li");
            li.textContent = item;
            listElement.appendChild(li);
        }
    }

    resetUI() {
        document.getElementById("controls").hidden = true;
        document.getElementById("listHeader").textContent = "";
        for(let e of document.querySelectorAll("ol#fileList  li")) {
            e.remove();
        }
    }

    listXhtmlFiles() {
        // ToDo, remove this diagnostics code
        this.populateList(this.epub.opf.xhtmlNames());
    }

    start() {
        let control = document.getElementById("drop_zone");
        control.ondrop = this.dropHandler.bind(this);
        control.ondragover = this.dragOverHandler.bind(this);
        document.getElementById("checkForInvalidXhtmlButton").onclick = this.checkForInvalidXhtml.bind(this);
        document.getElementById("checkForZeroSizeImagesButton").onclick = this.checkForZeroSizeImages.bind(this);
        document.getElementById("watermarkButton").onclick = this.waterMarkEpub.bind(this);
        document.getElementById("removeZeroSizeImagesButton").onclick = this.removeZeroSizeImages.bind(this);
        document.getElementById("listImagesButton").onclick = this.listImagesInViewOrder.bind(this);
        document.getElementById("removeAllImagesButton").onclick = this.removeAllImages.bind(this);
        document.getElementById("extractImagesButton").onclick = this.extractImages.bind(this);
        document.getElementById("removeElementsButton").onclick = this.removeElementsMatchingCss.bind(this);
        document.getElementById("cleanChrysanthemumGardenButton").onclick = this.cleanChrysanthemumGarden.bind(this);
        document.getElementById("sanitizeButton").onclick = this.sanitizeXhtml.bind(this);
        document.getElementById("convertTableToDivButton").onclick = this.convertTableToDiv.bind(this);
        document.getElementById("appendSourceLinkInEachChapterButton").onclick = this.appendSourceLinkInEachChapter.bind(this);
        document.getElementById("runScriptButton").onclick = this.runScript.bind(this);

        const fileNameInput = document.getElementById('fileNameInput');
        fileNameInput.addEventListener("change", () => this.onFileNameInputChange(fileNameInput), false);
    }
}

let main = new Main();
main.start();
