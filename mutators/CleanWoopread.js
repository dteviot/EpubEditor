            for(let p of [...dom.querySelectorAll("button")]) {
                console.log(p.outerHTML);
                p.remove();
            }
            return true;