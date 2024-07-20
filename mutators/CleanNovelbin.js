let wrapper = dom.querySelector("#wrapper");
let content = dom.querySelector("#chr-content");
let title = dom.querySelector("h2")?.textContent;
let replace = (wrapper && content)
if (replace) {
   wrapper.replaceWith(content);
   console.log("replacing " + title);
}
return replace;