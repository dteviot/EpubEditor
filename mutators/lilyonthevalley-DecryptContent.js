console.log("startScript");
let payloadEl = dom.querySelector(".encryptedPayload");
if (!payloadEl) return false;
console.log("found payload");

let decodedHTML = decodeURIComponent(atob(payloadEl.innerText));
console.log(decodedHTML);
let div = dom.createElement("div");
div.innerHTML = decodedHTML;
payloadEl.replaceWith(div);

return true;
