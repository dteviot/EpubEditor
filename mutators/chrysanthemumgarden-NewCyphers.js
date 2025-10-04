
    if (!Window.epubstate) {
        Window.epubstate = new Set();
        Window.epubstate.add("ZxXoTeIptL");
        Window.epubstate.add("ijqXQijeiD");
        Window.epubstate.add("WTKNOkuWha");
        Window.epubstate.add("rnlfJtfRCW");
        Window.epubstate.add("LPJMfkmHKG");
        Window.epubstate.add("PWJEddcfVv");
        Window.epubstate.add("ofcUGYMWCy");
        Window.epubstate.add("hffmcMyCbf");
        Window.epubstate.add("ktlmWRazmy");
        Window.epubstate.add("UxneBYgsjE");
        Window.epubstate.add("XMgbgIppHk");
        Window.epubstate.add("lqagMDCZsf");
    }
    let known = Window.epubstate;

    for (let span of dom.querySelectorAll("span[style^='font-family']")) {
        let name = span.getAttribute("style").split(":")[1].trim().replace(";", "");
        if (!known.has(name)) {
            known.add(name);
            console.log(name);
        }
    }