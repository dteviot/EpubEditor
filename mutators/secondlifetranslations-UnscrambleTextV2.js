function decrypt(clear, selector) {
    let crypt = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let decryptTable = new Map();
    for(let i = 0; i < crypt.length; ++i) {
        decryptTable.set(crypt[i], clear[i]);
    }
    let decryptChar = (c) => decryptTable.get(c) ?? c;
    let decryptString = (cypherText) => cypherText.split("").map(c => decryptChar(c)).join("");
    for(let e of dom.querySelectorAll(selector)) {
        e.class = "";
        e.textContent = decryptString(e.textContent);
        console.log("(" + selector + ")" + e.textContent);
    }
}

decrypt("rhbndjzvqkiexcwsfpogytumalVUQXWSAZKBJNTLEDGIRHCPFOMY", "span.jmbl");

    for(let e of dom.querySelectorAll(".jmbl-disclaimer")) {
        e.remove();
        console.log(e);
    }


return true;
