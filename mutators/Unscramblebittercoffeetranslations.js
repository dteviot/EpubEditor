function decrypt(clear, selector) {
    let crypt = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let decryptTable = new Map();
    for(let i = 0; i < crypt.length; ++i) {
        decryptTable.set(crypt[i], clear[i]);
    }
    let decryptChar = (c) => decryptTable.get(c) ?? c;
    let decryptString = (cypherText) => cypherText.split("").map(c => decryptChar(c)).join("");
    for(let e of dom.querySelectorAll(selector)) {
        console.log(e.textContent);
        e.textContent = decryptString(e.textContent);
        console.log(e.textContent);
    }
}

decrypt("wcrmbatihvlxdngospykqeuzfjWCRMBATIHVLXDNGOSPYKQEUZFJ", "span[style*='OpenSans-1']");
decrypt("dznqohwfytcmpaerubklgvsxjiDZNQOHWFYTCMPAERUBKLGVSXJI", "span[style*='OpenSans-2']");
decrypt("iqydbeanljopmukrhztxsvfcwgIQYDBEANLJOPMUKRHZTXSVFCWG", "span[style*='OpenSans-3']");

return true;
