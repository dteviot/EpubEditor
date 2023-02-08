// replace element with content
let toChange = [...dom.querySelectorAll("span.tooltip-toggle")];
for(let s of toChange) {
    s.replaceWith(s.textContent);
}
return 0 < toChange.length;