let toRemove = [...dom.querySelectorAll(".unlock-buttons")];
for(let p of toRemove) {
        p.remove();
    }
return 0 < toRemove.length;