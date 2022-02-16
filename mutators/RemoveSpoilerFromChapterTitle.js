// example: remove "chapter" from title of each chapter
let title = dom.querySelector("h1");
let changed = false
if (title != null) {
    let txt = title.textContent;
    const regexpChapter = new RegExp("Chapter\\s*[0-9]*");
    let match = txt.match(regexpChapter);
    if (match != null) {
        console.log(txt);
        console.log(match[0]);
        title.textContent = match[0];
        changed = true;
    }
}
return changed;