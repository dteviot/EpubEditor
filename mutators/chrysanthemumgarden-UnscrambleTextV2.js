function decrypt(clear, selector) {
    let crypt = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let decryptTable = new Map();
    for(let i = 0; i < crypt.length; ++i) {
        decryptTable.set(crypt[i], clear[i]);
    }
    let decryptChar = (c) => decryptTable.get(c) ?? c;
    let decryptString = (cypherText) => cypherText.split("").map(c => decryptChar(c)).join("");
    for(let e of dom.querySelectorAll(selector)) {
        e.removeAttribute("style");
        e.textContent = decryptString(e.textContent);
        console.log("(" + selector + ")" + e.textContent);
    }
}

decrypt("qVTPNEAHbykpxiYtlWdOzUGnsMcZXBQuSaRKICJwgFLDefrvhmjo", "span[style*='ZxXoTeIptL']");
decrypt("PwyUBVTYqAXxZMfEjrSeDazCkWoivHJbKltNdLOhupgImQscnFRG", "span[style*='ijqXQijeiD']");
decrypt("dTKbCMwpkGWJrJOUiFVesPoXRfQSmuvqglEyDBLnzIYHAZcaxthN", "span[style*='WTKNOkuWha']");
decrypt("JznCuUZtTgKGAkvwBSOYLHsihaNEPpMVefWRoqlymbjcIXrdQDFx", "span[style*='rnlfJtfRCW']");
decrypt("cHMZtWYfaEipjXbRPLogAFSBDVrOmUNxIlkeCszTuwKhdJnGqQyv", "span[style*='LPJMfkmHKG']");

decrypt("iKhDSORsAbqBtGNYpecfHQEwklxJlWCmTLjFdzrPXuvVonMygUZa", "span[style*='PWJEddcfVv']");
decrypt("gjkChAdlBJYOVIxTXnisWLvmyEMtuGzPpaebFDcZoRHSwUrNfqKQ", "span[style*='ofcUGYMWCy']");
decrypt("FGqNYQLTPUHecErxRuCjBkDXbMaKyfzOhJdipolAgWItZVsnmSvw", "span[style*='hffmcMyCbf']");
decrypt("upTZvvjGaMwRBUXelqJACQfFkybrEnmoWcgHxYPztSshDOIdLiKN", "span[style*='ktlmWRazmy']");
decrypt("RWOVtgzYjNfXMPQqscdZKwrLlFBCevhHSAEDIpnoGTukibyxamJU", "span[style*='UxneBYgsjE']");
decrypt("uZcQtkAyRnJgxGVTbEXYwOBlWhvmKqoPrjdceHNDpUzfSFMaisIL", "span[style*='XMgbgIppHk']");
decrypt("inDFJlbUacwvHOIdxushAoLVMZCSeYjPXkzNtQRfyqTrpWGgmEBK", "span[style*='lqagMDCZsf']");

decrypt("ikvXhpVftrOcGCBaZxgFSwmWEjbAoLePKnTqUDMIyJdRlQuzsYNH", "span[style*='UTBCOGYVcD']");
decrypt("HwSjBkqPuabFCNgvlXGiEDpZJURnfKoLATOyQImshtYdWMVrecxz", "span[style*='neTnLsdxBa']");
decrypt("EdmCAkeowsNOfGJKbMgTitzIUjLxnrYQZXqcvuylWHDSphRBaFVP", "span[style*='LQrKfqvDvK']");
decrypt("YuZqUFnHITMGlebCtQrKLSgfxJvDwsBiaWRkNdEXmOjVzohAycpP", "span[style*='qmmADVPJyD']");
decrypt("UaAfIxLRXihODSjvBEFJeZuGTPlWnVQzcyqrHNkmoMKCgbtsdYwp", "span[style*='SGBznXcdPC']");
decrypt("jbsUhGHLVKtioYfAnrvTIBdpFOWgMExDRPyXNzeQawZulkSqmcCJ", "span[style*='FnKeibFQhj']");
decrypt("FINtlAjGYqeXHKDuPdBhpsWvQnLSJmrbxkyzwZogcfRVOUTECaMi", "span[style*='IXiXwzoevW']");
decrypt("CmWkeQxEgfFYuAXHUwpVRGiMvJbBdojPalhrsSZDqLyOKtTNIcnz", "span[style*='EvSWqkjBYz']");
decrypt("gjkChAdlBJYOVIxTXnisWLvmyEMtuGzPpaebFDcZoRHSwUrNfqKQ", "span[style*='hJrIMhiLIW']");

decrypt("ViphqmcezIsEnaBKkUGoyQJxrufTYOLRFjwlXStDAHdWMPvbCNZg", "span[style*='SEhBEutKiF']");
decrypt("SDhCdAvmspcaFJMxRNBriZnoHeWKYgbQwVtKPXTLEUjOfzGqyIlu", "span[style*='yqYCWpzUCb']");
decrypt("upTZVvjGaMwRBUXelqJACQfFkybrEnmoWcgHxYPztSshDOIdLiKN", "span[style*='XteTTFfBwp']");
decrypt("inDFJlbUacwvHOIdxushAoLVMZCSeYjPXkzNtQRfyqTrpWGgmEBK", "span[style*='XAGRhgiWCi']");
decrypt("VStMAakjpfRQFUGWeqrguCdblcvYIDHNKzywBxLTnsZmPJiXEohO", "span[style*='SAOyHmauIh']");
decrypt("EmIhxnBkJVTwsuPQqvAcOaSyeXKDoztpYCNRFgMGrLlHiWfbUjdZ", "span[style*='riwhyYaCJZ']");
decrypt("wZkprtAulnqVFOfcvSPaDTMYdXymNQsGUILJWBiebxhEoCgjRKHz", "span[style*='obYashdtJI']");
decrypt("PwzuNiaQBycMxhzfElTdLkegHRUJrjWKXVYmADoqntOCGsSIpFbv", "span[style*='lOFLTaIJJX']");
decrypt("PoEHTVZptQiJXjvdMUqhAfCxSuLNksIrFykbWwGoezDRlYamcgnB", "span[style*='JelXiZWjqn']");
decrypt("QphrHZeTVRUWlKmCsdXEGuwbaovSFIJDfnqOcYBixkzjLMAgyNtP", "span[style*='fkIbKbXagm']");

decrypt("VROtYexfAGoarQSWZcuCypvNMljilUbqHKmkhXgPdnTFwJEDBLzs", "span[style*='qdmzgWVFHN']");
decrypt("pbqUHJZxnMOjQtAuEyoemXliIPNcDTdazWkKgGLRhwYfBSFCVsvr", "span[style*='FZaOyZdeRR']");
decrypt("LAnBhRjcwgZbvlCrNmQTqKXyFDPdJVEGzaWYIikSoetHUfxsuMpO", "span[style*='pqeNICVeYY']");
decrypt("qBCDbvnRtgEZPYaNmJGUlcdsSHFMQKhyzxpWejTVilXfowOuAkrL", "span[style*='SFZergSQdR']");
decrypt("EmIhxnBkJVTwsuPQqvAcOaSyeXKDoztpYCNRFgMGrLlHiWfbUjdZ", "span[style*='tFQOgrCLXY']");
decrypt("MFbcZDXiNudarsGYTogEAUjBxyIvzkSHVRwKfQOWmhLqtneplPCJ", "span[style*='MNBRlrkiJZ']");
decrypt("VStMAakjpfRQFUGWeqrguCdblcvYIDHNKzywBxLTnsZmPJiXEohO", "span[style*='PeJqMdmbmg']");
decrypt("cHMZtWYfaEipjXbRPLogAFSBDVrOmUNxIlkeCszTuwKhdJnGqQyv", "span[style*='UokbKmPUVp']");
decrypt("KFhayuLfBRAgqJvnjeSHwPMUQzEcrTpbkOZxVlYNiXstGoWImCDd", "span[style*='ezkyzoAbFA']");
decrypt("WmydfBRPVIODTuxMEtYFqeQSzcjnKsXwapCkoUJZAvlGhLiNgbHr", "span[style*='HGQJysWqTs']");
decrypt("DwChjXeaLTrHMBxEzfsuPKmWcJqZbiASNlVRFpGgkQdUoyOvntYI", "span[style*='rMPWDRxgHG']");

decrypt("icHNSUwesAGBaCnZYgQVkdjbeWIPXfpDyJtForhvMzuKTqRlxOLm", "span[style*='bvEEthIsQN']");
decrypt("QphrHZeTVRUWlKmCsdXEGuwbaovSFIJDfnqOcYBixkzjLMAgyNtP", "span[style*='EXvmBtYero']");
decrypt("LzRsNxDJpbYSdGhcXuCgoqnFmrHEiZjyMtOfIKPATvwQBVakleWU", "span[style*='jLITCzXuHE']");
decrypt("ERzndSqFrxuDMNtkVyOYfeTjcIJPaHwhovGKCgQZbWLAmBpsXiUl", "span[style*='LLlVMCxDmi']");
decrypt("xPUhYNEyqXpjClKvZLJwFHWukfRnIdcVODAgrzQMtaBimbGoeTsS", "span[style*='LXRYsUabLi']");
decrypt("ZBnzlOeqoWJatxTLMNpDCYIFdfQvwbUEjGumHikrVXPKRcShsygA", "span[style*='tempdGoNKG']");
decrypt("CRLUaqKEwPhAdFIYZDQNpxBnSisvjucGTzOgfekXjbmrWtoVyHlM", "span[style*='twBiVBYzHD']");
decrypt("EdmCAkeowsNOfGJKbMgTitzIUJLxnrYQZXqcvuylWHDSphRBaFVP", "span[style*='UZPvIjLhrA']");
decrypt("kxWYnNJzIrCuoSHAeEBVTFQfaRyhMDwgmXdPZpOGUnLiKvtscjql", "span[style*='KTueDeyFJz']");
decrypt("iDZOLYCJEXRfQsucWoTlkqeFtNSaUIwvHMpnzPKdVGhjbAgBxmyr", "span[style*='VfhIGwDqiv']");
decrypt("pbqUHJZxnMOjQtAuEyoemXIilPNcDTdazWkKgGLRhwYfBSFCVsvr", "span[style*='FZaOyZdeRR']");
decrypt("TLkrzWIdXhBpqmDytFvMJQAngUacfVbPHijlRYCusZoONKEGSexw", "span[style*='aBlnHoVyKJ']");
decrypt("QphrHZeTVRUWlKmCsdXEGuwbaovSFIJDfnqOcYBixkzjLMAgyNtP", "span[style*='cSNnlFjStm']");
decrypt("vDxtzobGrXESwLWypAkZOMBYQNsdPUTVcFhnHajgRmiKfeuCIJlq", "span[style*='EjUwPEOFVm']");
decrypt("ViphqmcezIsEnaBKkUGoyQJxrufTYOLRFjwlXStDAHdWMPvbCNZg", "span[style*='gxlbCbioBG']");
decrypt("zBnNYbFxfkPLZXrViQtEMSRsepyvdwJgDCmWcauGqToHKhIjUAlO", "span[style*='MFDvucCdUp']");
decrypt("PwyUBVTYqAXxZMfEjrSeDazCkwoivHJbKltNdLOhupgImQscnFRG", "span[style*='MKZDvaxkcf']");
decrypt("MxaoiDLZktbgBpfmuGqXdJwsSCOYryHVRUKlzNvAnTjIWchPQFeE", "span[style*='RgHsxMIuJr']");
decrypt("CmWkeQxEgfFYuAXHUwpVRGiMvJbBdojPalhrsSZDqLyOKtTNIcnz", "span[style*='RIdELIilkj']");
decrypt("neLPzpigAlGXRhDkQbSJyvIwVjYxfoOMcqsENrUWtmTFCZHaBduK", "span[style*='rnUsFAZIoi']");
decrypt("HqOPjeAgIRWtQFyaKBCVGNZrUXdopflwMYEivJsSTucDxnhbzmLk", "span[style*='XgFmlXGwXh']");

decrypt("lMiDtBgoaKXzIhdLfGjQScPbTEHNemZkCxuRFUqvnJwsVyOrWYAp", "span[style*='Degoefaiuy']");
decrypt("VROtYexfAGoarQSWZcuCypvNMljiIUbqHKmkhXgPdnTFwJEDBLzs", "span[style*='EsmkhjcGTx']");
decrypt("vDxtzobGrXESwLWypAkZOMBYQNsdPUTVcFhnHajgRmiKFEUCIJlq", "span[style*='JYCwWuItpK']");
decrypt("geLIkWUOrHlZdTcESQRPhpwsnGboMVuyJNjtzYXBqKDCAfmxFvia", "span[style*='LFHdpmoCtX']");
decrypt("xvlNyZqJuzshckbdajUWmEKGCrRPOwTHIBAFYLnpfeMSDXQVtgio", "span[style*='nrUGbDZxOA']");
decrypt("HwSjBkqPuabFCNgvlXGiEDpZJURnfKoLATOyQImshtYdWMVrecxz", "span[style*='oLXxkTmMQX']");
decrypt("CRLUaqKEwPhAdFIYZDQNpxBnSisvjucGTzOgfekXJbmrWtoVyHlM", "span[style*='ZxafLETnpI']");
decrypt("lMiDtBGoaKXzIhdLfGjQScPbTEHNemZkCxuRFUqvnJwsVyOrWYAp", "span[style*='Degoefaiuy']");
decrypt("VROtYexfAGoarQSWZcuCypvNMljiIUbqHKmkhXgPdnTFwJEDBLzs", "span[style*='EsmkhjcGTx']");
decrypt("vDxtzobGrXESwLWypAkZOMBYQNsdPUTVcFhnHajgRmiKfeuCIJlq", "span[style*='JYCwWuItpK']");
decrypt("geLIkWUOrHlZdTcESQRPhpwsnGboMVuyJNjtzYXBqKDCAfmxFvia", "span[style*='LFHdpmoCtX']");
decrypt("xvlNyZqJuzshckbdajUWmEKGCrRPOwTHIBAFYLnpfeMSDXQVtgio", "span[style*='nrUGbDZxOA']");
decrypt("HwSjBkqPuabFCNgvlXGiEDpZJURnfKoLATOyQImshtYdWMVrecxz", "span[style*='oLXxkTmMQX']");
decrypt("CRLUaqKEwPhAdFIYZDQNpxBnSisvjucGTzOgfekXJbmrWtoVyHlM", "span[style*='ZxafLETnpI']");

    if (!Window.epubstate) {
        Window.epubstate = new Set();
    }

    let known = Window.epubstate;

    for (let span of dom.querySelectorAll("span[style^='font-family']")) {
        let name = span.getAttribute("style").split(":")[1].trim().replace(";", "");
        if (!known.has(name)) {
            known.add(name);
            console.error("Unknown cypher: " + name);
        }
    }

return true;
