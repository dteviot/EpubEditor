    let known = [
        "ZxXoTeIptL",
        "ijqXQijeiD",
        "WTKNOkuWha",
        "rnlfJtfRCW",
        "LPJMfkmHKG",
        "PWJEddcfVv",
        "ofcUGYMWCy",
        "hffmcMyCbf",
        "ktlmWRazmy",
        "UxneBYgsjE",
        "XMgbgIppHk",
        "lqagMDCZsf",
    ];

    for (let e of dom.querySelectorAll("span[style^='font-family']")) {
        let style = e.getAttribute("style");
        let newCypher = true;
        for (let k of known) {
            if (style.includes(k)) {
                newCypher = false;
                break;
            }
        }
        if (newCypher) {
            console.log(style);
        }
    }