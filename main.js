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
        if (file !== null) {
            console.log('... file.name = ' + file.name);
            return this.epub.load(file)
                .then(() => this.removeDragData(ev))
                .then(() => this.onEpubLoaded());
        }
    }    

    removeDragData(ev) {
        console.log('Removing drag data')
      
        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to remove the drag data
            ev.dataTransfer.items.clear();
        } else {
            // Use DataTransfer interface to remove the drag data
            ev.dataTransfer.clearData();
        }
    }

    onEpubLoaded() {
        document.getElementById("controls").hidden = false;
    }

    checkForZeroSizeImages() {
        let images = this.epub.findZeroSizeImages();
        let headerText = (0 == images.length) ? "No zero size images found" : "Following zero size images found";
        let header = document.getElementById("listHeader");
        header.textContent = headerText;
        this.populateList(images.map(i => i.outerHTML));
    }

    waterMarkEpub() {
        let watermark = document.getElementById("watermark").value;
        let epub = this.epub;
        return epub.watermarkContent(watermark)
            .then(() => epub.save("test.epub"));
    }

    removeZeroSizeImages() {
        let images = this.epub.findZeroSizeImages();
        return this.epub.removeTagsForImages(images)
            .then(() => this.epub.removeItems(images))
            .then(() => this.epub.save("test.epub"));
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

    listXhtmlFiles() {
        // ToDo, remove this diagnostics code
        let listElement = document.getElementById("fileList");
        for(let name of this.epub.opf.xhtmlNames()) {
            let li = document.createElement("li");
            li.textContent = name;
            listElement.appendChild(li);
        }
    }

    start() {
        let control = document.getElementById("drop_zone");
        control.ondrop = this.dropHandler.bind(this);
        control.ondragover = this.dragOverHandler.bind(this);
        document.getElementById("checkForZeroSizeImagesButton").onclick = this.checkForZeroSizeImages.bind(this);
        document.getElementById("watermarkButton").onclick = this.waterMarkEpub.bind(this);
        document.getElementById("removeZeroSizeImagesButton").onclick = this.removeZeroSizeImages.bind(this);
        document.getElementById("listImagesButton").onclick = this.listImagesInViewOrder.bind(this);
    }
}

let main = new Main();
main.start();
