// Seems that Webnovel sometimes embeds html in the content.
// But I can't tell when it's html, and when it's a "<" char
// So, WebToEpub treats all as text, and this script can be used to fix

            let modified = false;
            for(let p of [...dom.querySelectorAll("p")]) {
                let c = p.textContent;
                if (c.includes("<em>")) {
                    console.log(c);
                    p.innerHTML = c;
                    modified = true;
                }
            }
            return modified;