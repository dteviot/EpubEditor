# Epub Editor
(c) 2018 David Teviotdale   

Tool I hacked up to clean-up epubs made by WebToEpub
This is very much a work in progress, and not really my best work.

## How to use
* Copy the HTML and JS files to a directory.
* Add jszip.min.js from https://stuk.github.io/jszip/ to same directory
* Open main.html in chrome.
* Drag and drop epub onto the drop zone.
* Click the button for the function you want. e.g.
  *  Click "Check for Zero Size Images" button to see if WebToEpub inserted "empty" images when it was unable to fetch the wanted image from the Internet.
  *  If it did, click "Remove Zero Size Images" to correctly remove them from the epub.
  *  To remove unwanted elements from an epub (e.g. Translator's notes from WebNovel.com) type the CSS selector that describes the elements into the text box beside the "Delete elements matching CSS" button and click same button.

## License information
Licenced under GPLv3.
