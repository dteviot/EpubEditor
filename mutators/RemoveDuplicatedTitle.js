let titleNode = dom.querySelector("h1")?.firstChild;
let titleText = titleNode?.data;
let filter = (node) => {
    return (node !== titleNode) && (node.data == titleText)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP;
};

let walker = dom.createTreeWalker(
  dom.body,
  NodeFilter.SHOW_TEXT,
  filter
);
let node = walker.firstChild()?.parentNode;
if (node != null) {
    console.log(node.outerHTML);
    node.remove();
    return true;
}
return false;