# Epub Editor
(c) 2018 David Teviotdale   

Tool I hacked up to clean-up epubs made by WebToEpub
This is very much a work in progress, and not really my best work.

## How to use (really easy way)
* Go to https://dteviot.github.io/EpubEditor/
* Drag and drop epub onto the drop zone. Or click the "Choose File" button and select file on dialog that pops up.
* Click the button for the function you want. e.g.
  *  Click "Check for Zero Size Images" button to see if WebToEpub inserted "empty" images when it was unable to fetch the wanted image from the Internet.
  *  If it did, click "Remove Zero Size Images" to correctly remove them from the epub.
  *  To remove unwanted elements from an epub (e.g. Translator's notes from WebNovel.com) type the CSS selector that describes the elements into the text box beside the "Delete elements matching CSS" button and click same button.

## How to use (somewhat harder way)
* Copy the HTML and JS files to a directory.
* Open index.html in Chrome
* Repeat steps from (easy way) starting with "Drag and drop epub"

## License information
Licenced under GPLv3.
