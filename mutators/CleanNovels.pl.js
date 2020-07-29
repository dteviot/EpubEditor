            for(let p of [...dom.querySelectorAll("p")]) {
                let c = p.textContent;
                if ((c == "This chapter is updated by Novels.pl") || (c == "Liked it? Take a second to support Novels on Patreon!")) {
                    console.log(c);
                    p.remove();
                }
            }
            return true;