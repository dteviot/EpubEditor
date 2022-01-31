let decryptTable = new Map();
let crypt = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let clear = "rhbndjzvqkiexcwsfpogytumalVUQXWSAZKBJNTLEDGIRHCPFOMY";
for(let i = 0; i < crypt.length; ++i) {
    decryptTable.set(crypt[i], clear[i]);
}
let decryptChar = c => decryptTable.get(c) ?? c;
let decryptString = cypherText => cypherText.split("").map(c => decryptChar(c)).join("");
for(let e of dom.querySelectorAll("span.jmbl")) {
    e.textContent = decryptString(e.textContent);
}
return true;
