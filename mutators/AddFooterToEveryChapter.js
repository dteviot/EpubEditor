var toInsert = dom.createElement("p");
toInsert.innerHTML = "text to insert";
toInsert.style.position = "absolute";
toInsert.style.textAlign = "center";
toInsert.style.width = "100%";
dom.body.appendChild(toInsert);
return true;