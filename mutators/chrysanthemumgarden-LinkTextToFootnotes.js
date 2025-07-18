let makeLink = (id) => {
    let link = dom.createElement("a");
    link.href = "#" + id;
    return link;
}

let addParent = (newParent, element) => {
    element.replaceWith(newParent);
    newParent.appendChild(element);
}

let addIndexToSpan = (span, index) => {
    let sup = dom.createElement("sup");
    sup.textContent = index;
    span.appendChild(sup);
}

let addHyperlinkToSpan = (span, id) =>
    addParent(makeLink(id), span);

let updateSpan = (span, index, id, backRef) => {
    addIndexToSpan(span, index);
    span.id = backRef;
    addHyperlinkToSpan(span, id);
}

let addIndexToFootnote = (title, index) =>
    title.prepend(dom.createTextNode(index + " "));

let addHyperlinkToFootnote = (title, backRef) => {
    addParent(makeLink(backRef), title);
}

let updateFootnote = (footnote, index, backRef) => {
    let title = footnote.querySelector(".tooltip-title");
    addIndexToFootnote(title, index);
    addHyperlinkToFootnote(title, backRef);
}

let spans = [...dom.querySelectorAll("span.tooltip-toggle")];
let index = 0;
for(let span of spans) {
    let id = span.getAttribute("tooltip-target");
    let footnote = dom.querySelector("#" + id);
    let backRef = "back-" + id;
    if (id) {
        ++index;
        updateSpan(span, index, id, backRef);
        updateFootnote(footnote, index, backRef);
    }
}

return 0 < spans.length;
