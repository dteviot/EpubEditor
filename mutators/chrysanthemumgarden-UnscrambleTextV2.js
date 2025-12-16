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
decrypt("vDxtzobGrXESwLWypAkZOMBYQNsdPUTVcFhnHajgRmiKfeuCIJlq", "span[style*='JYCwWuItpK']");
decrypt("geLIkWUOrHlZdTcESQRPhpwsnGboMVuyJNjtzYXBqKDCAfmxFvia", "span[style*='LFHdpmoCtX']");
decrypt("xvlNyZqJuzshckbdajUWmEKGCrRPOwTHIBAFYLnpfeMSDXQVtgio", "span[style*='nrUGbDZxOA']");
decrypt("HwSjBkqPuabFCNgvlXGiEDpZJURnfKoLATOyQImshtYdWMVrecxz", "span[style*='oLXxkTmMQX']");
decrypt("CRLUaqKEwPhAdFIYZDQNpxBnSisvjucGTzOgfekXJbmrWtoVyHlM", "span[style*='ZxafLETnpI']");

decrypt("ZBnzlOeqoWJatxTLMNpDCYIFdfQvwbUEjGumHikrVXPKRcShsygA", "span[style*='POlcPLTnhM']");
decrypt("CmWkeQxEgfFYuAXHUwpVRGiMvJbBdojPalhrsSZDqLyOKtTNIcnz", "span[style*='BQcYLatSHs']");
decrypt("inDFJlbUacwvHOldxushAoLVMZCSeYjPXkzNtQRfyqTrpWGgmEBK", "span[style*='CxlcyRYxqg']");
decrypt("QphrHZeTVRUWlKmCsdXEGuwbaovSFIJDfnqOcYBixkzjLMAgyNtP", "span[style*='UydKzzhRTw']");
decrypt("xoymMlDzBNkQVEnXGOaiThpeAjWUcZvPlJLCfwtKSbsYrdRqugFH", "span[style*='SNpstEsWYP']");
decrypt("EDBHyibcKYCjtFmzgVArLIRXndfPhuwvTOseZlUaoxNpGJqMWkSQ", "span[style*='rsikuNaABZ']");
decrypt("EmIhxnBkJVTwsuPQqvAcOaSyeXKDoztpYCNRFgMGrLlHiWfbUjdZ", "span[style*='yzaFbpeGUa']");

decrypt("HFETmJAhKPnDOYjBwyxuXatiZRoVpMWvefcqzNkgQlsCdIGUbSrL", "span[style*='iXpTXOWYGI']");
decrypt("inDFJlbUacwvHOIdxushAoLVMZCSeYjPXkzNtQRfyqTrpWGgmEBK", "span[style*='jsdNDWemkp']");
decrypt("ErZUfzIKaAPqYwLFCVdeOQJkSTHxuGlphobMgNcsXjinDWmByRtv", "span[style*='muRQDjktod']");
decrypt("xoymMIDzBNkQVEnXGOaiThpeAjWUcZvPlJLCfwtKSbsYrdRqugFH", "span[style*='sLNjyzpFun']");
decrypt("qVGZydWjAotzwmuvXfrBbTRHLiDKpxanSQlechMsYgPJCEIFUONk", "span[style*='UPyRYJCIZw']");
decrypt("YuZqUFnHITMGlebCtQrKLSgfxJvDwsBiaWRkNdEXmOjVzohAycpP", "span[style*='uXOSwTSgPx']");
decrypt("TsaIRfGZnyhKvYobSeUgOBmlXCAVcwHzpLDxduPtJFQNiWrMjkqE", "span[style*='VFxVMHNiyK']");
decrypt("SwVuEnpXNaxfrihyQFIPOLmMYZUjlvRJeHodbDGATsBkztgcqWCK", "span[style*='wNznjOOtYT']");
decrypt("ELzZxnXGphkCMRFmAuBfIyvgiwjDSNtlJqaHPWObsUQreVYTKcdo", "span[style*='ycYNnojOqG']");

decrypt("KFhayuLfBRAgqJvnjeSHwPMUQzEcrTpbkOZxVlYNiXstGoWImCDd", "span[style*='RSoYmrQIwj']");
decrypt("ZBnzlOeqoWJatxTLMNpDCYIFdfQvwbUEjGumHikrVXPKRcShsygA", "span[style*='dvsEFNaARu']");
decrypt("xoymMIDzBNkQVEnXGOaiThpeAjWUcZvPlJLCfwtKSbsYrdRqugFH", "span[style*='YIpLipOQtY']");
decrypt("TsaIRfGZnyhKvYobSeUgOBmlXCAVcwHzpLDxduPtJFQNiWrMjkqE", "span[style*='EodGVdlrVD']");
decrypt("wGEnejTOVNDQxFqiHgbWZtLydJlcSouXBPKrYvzACkmplRhMsfUa", "span[style*='QOOWMbROXb']");
decrypt("neLPzpigAlGXRhDkQbSJyvlwVjYxfoOMcqsENrUWtmTFCZHaBduK", "span[style*='TXMhPjQFOO']");
decrypt("SwVuEnpXNaxfrihyQFIPOLmMYZUjlvRJeHodbDGATsBkztgcqWCK", "span[style*='xyYMpmrjDy']");
decrypt("inDFJlbUacwvHOIdxushAoLVMZCSeYjPXkzNtQRfyqTrpWGgmEBK", "span[style*='VdkZRxEDIa']");
decrypt("ltTWhQwUrJcBPAuvRjSskzKOVYgHZeyIdFfqMpoxXnEmLCGiNabD", "span[style*='XrvXnqKaqP']");

decrypt("eOqaECAymwKpRhdcvWNLTxUHgnVXfSoMjPJkZQbDtBFGizYrIlsu", "span[style*='QEhATCDVqE']");

decrypt("ErZUfzIKaAPqYwLFCVdeOQJkSTHxuGlphobMgNcsXjinDWmByRtv", "span[style*='hMLHuWmifY']");
decrypt("mLPWMFVSInDUzBxivJhoOwlCZEpgAGqsyQfrjXabedKHNkTRYtuc", "span[style*='eaCWdzKiSy']");
decrypt("bEHGfOrjzDQIWKCBxXhvetgdNnJTFVuAyPscZqRSwoalmpMYiUkL", "span[style*='BPFfSYocak']");
decrypt("AqlHphQCbUZgnYieWuwLzTvJMFxIPKtRmoarEskDVjGNcfXyBdOS", "span[style*='rFqBSlNmQg']");
decrypt("TsaIRfGZnyhKvYobSeUgOBmlXCAVcwHzpLDxduPtJFQNiWrMjkqE", "span[style*='uiFvBMKztH']");
decrypt("whxqtFgAkKVdZEpWzBsvSUNjLfIPuHabrCDRGXeQolyTOciJMYnm", "span[style*='zVUvrgnjGF']");
decrypt("FGqNYQLTPUHecErxRuCjBkDXbMaKyfzOhJdipolAgWItZVsnmSvw", "span[style*='oopuxRZzGs']");
decrypt("MxaoiDLZktbgBpfmuGqXdJwsSCOYryHVRUKlzNvAnTjIWchPQFeE", "span[style*='YJTTXEElyw']");
decrypt("XBPQJaTEScurUgntLhipeROoKksGzAYCWMjqFdZlwmbDHvyINVfx", "span[style*='jKdnmmYzTH']");
decrypt("PwyUBVTYqAXxZMfEjrSeDazCkWoivHJbKltNdLOhupgImQscnFRG", "span[style*='xEKQbXjOoW']");

decrypt("LzRsNxDJpbYSdGhcXuCgoqnFmrHEiZjyMtOfIKPATvwQBVakleWU", "span[style*='OTDqowDNJD']");
decrypt("EdmCAkeowsNOfGJKbMgTitzIUjLxnrYQZXqcvuylWHDSphRBaFVP", "span[style*='qIUlUtuNsf']");
decrypt("zBnNYbFxfkPLZXrViQtEMSRsepyvdwJgDCmWcauGqToHKhIjUAlO", "span[style*='dxRSLHKLcU']");

decrypt("WmydfBRPVIODTuxMEtYFqeQSzcjnKsXwapCkoUJZAvlGhLiNgbHr", "span[style*='IkWxKitrrD']");
decrypt("lMiDtBgoaKXzIhdLfGjQScPbTEHNemZkCxuRFUqvnJwsVyOrWYAp", "span[style*='psgmQvCVyq']");
decrypt("RWOVtgzYjNfXMPQqscdZKwrLlFBCevhHSAEDIpnoGTukibyxamJU", "span[style*='rIDsekfeAb']");
decrypt("VStMAakjpfRQFUGWeqrguCdblcvYIDHNKzywBxLTnsZmPJiXEohO", "span[style*='RwXmycqDuM']");
decrypt("ERzndSqFrxuDMNtkVyOYfeTjcIJPaHwhovGKCgQZbWLAmBpsXiUl", "span[style*='WyQkYVjbMG']");

decrypt("jweUWMzgtNpxCblFiGIOPRvBHoJXZDVmQnTLuYhdfrEcKakAsSqy", "span[style*='AaaWpuDsFO']");
decrypt("qVTPNEAHbykpxiYtlWdOzUGnsMcZXBQuSaRKICJwgFLDefrvhmjo", "span[style*='aqkKEZHHIL']");
decrypt("CmWkeQxEgfFYuAXHUwpVRGiMvJbBdojPalhrsSZDqLyOKtTNIcnz", "span[style*='eoNevgwurb']");
decrypt("SDhCdAvmspcaFJMxRNBriZnoHeWKYgbQwVtkPXTLEUjOfzGqyIlu", "span[style*='TzIvcRHwNP']");
decrypt("XiFDICeMQtqEvboVjuhdcOgySaNzwBJGKWrPfTAmnsRHUxYLZkpl", "span[style*='UaHKTKJaLj']");
decrypt("qBCDbvnRtgEZPYaNmJGUIcdsSHFMQKhyzxpWejTVilXfowOuAkrL", "span[style*='vNCJTwAHtI']");
decrypt("eDCzyBhMrKZJnNadoxOLtmiIvHTcPbSRYlfqukUgAGXspwVQFEWj", "span[style*='xWVnqtcJCT']");
decrypt("lMiDtBgoaKXzIhdLfGjQScPbTEHNemZkCxuRFUqvnJwsVyOrWYAp", "span[style*='yYVPWuFCHj']");

decrypt("MFbcZDXiNudarsGYTogEAUjBxyIvzkSHVRwKfQOWmhLqtneplPCJ", "span[style*='kIDUpTPvCD']");
decrypt("gjkChAdlBJYOVIxTXnisWLvmyEMtuGzPpaebFDcZoRHSwUrNfqKQ", "span[style*='xoPNvcPQdX']");
decrypt("VStMAakjpfRQFUGWeqrguCdblcvYIDHNKzywBxKTnsZmPJiXEohO", "span[style*='CQySsWUNNg']");
decrypt("MxaoiDLZktbgBpfmuGqXdJwsSCOYryHVRUKlzNvAnTjIWchPQFeE", "span[style*='JArjxBdbNx']");

decrypt("eOqaECAymwKpRhdcvWNLTxUHgnVXfSoMjPJkZQbDtBFGizYrllsu", "span[style*='aGnVdLlqOe']");
decrypt("ErZUfzIKaAPqYwLFCVdeOQJkSTHxuGlphobMgNcsXjinDWmByRtv", "span[style*='bYLeCyGAyw']");
decrypt("YzklSNaconDsutOixICrJZwHeAyUEPhQBpFdTbjVmfRWqLvgXGKM", "span[style*='dMCmWigFHx']");
decrypt("LAnBhRjcwgZbvlCrNmQTqKXyFDPdJVEGzaWYIikSoetHUfxsuMpO", "span[style*='frTLQoITGa']");
decrypt("HfdFkPlmYisAcWLtKICaXeguDRnphZTJwEQqOGVzjoSvMByNxbrU", "span[style*='MTCIjhSEgc']");
decrypt("VROtYexfAGoarQSWZcuCypvNMljiIUbqHKmkhXgPdnTFwJEDBLzs", "span[style*='MtnArFkuWF']");
decrypt("DwChjXeaLTrHMBxEzfsuPKmWcJqZbiASNlVRFpGgkQdUoyOvntYI", "span[style*='puZrtBgrLD']");
decrypt("upTZVvjGaMwRBUXelqJACQfFkybrEnmoWcgHxYPztSshDOIdLiKN", "span[style*='vTsEgzHdeB']");

decrypt("eOqaECAymwKpRhdcvWNLTxUHgnVXfSoMjPJkZQbDtBFGizYrIlsu", "span[style*='KtsYVqTANh']");
decrypt("MLTjxanXPEUrhyKpRfdNAzebCkWlovqQBgDSZuGciHmswYFOIVJt", "span[style*='mMigVYVPkh']");
decrypt("XiFDICeMQtqEvboVjuhdcOgySaNzwBJGKWrPfTAmnsRHUxYLZkpl", "span[style*='MYkzWbAYqJ']");
decrypt("LzRsNxDJpbYSdGhcXuCgoqnFmrHEiZjyMtOfIKPATvwQBVakleWU", "span[style*='oHUBOoUSuY']");
decrypt("MxaoiDLZktbgBpfmuGqXdJwsSCOYryHVRUKlzNvAnTjIWchPQFeE", "span[style*='QWTHGRLvIs']");
decrypt("xoymMIDzBNkQVEnXGOaiThpeAjWUcZvPlJLCfwtKSbsYrdRqugFH", "span[style*='WjbXCFYxIk']");
decrypt("TLkrzWIdXhBpqmDytFvMJQAngUacfVbPHijlRYCusZoONKEGSexw", "span[style*='WKbmIlnXoB']");
decrypt("FINtlAjGYqeXHKDuPdBhpsWvQnLSJmrbxkyzwZogcfRVOUTECaMi", "span[style*='YjFRqpzjbO']");
decrypt("DwChjXeaLTrHMBxEzfsuPKmWcJqZbiASNlVRFpGgkQdUoyOvntYI", "span[style*='ZufVlOvExu']");

decrypt("LzRsNxDJpbYSdGhcXuCgoqnFmrHEiZjyMtOfIKPATvwQBVakleWU", "span[style*='aToYvDDcst']");
decrypt("ikvXhpVftrOcGCBaZxgFSwmWEjbAoLePKnTqUDMIyJdRlQuzsYNH", "span[style*='BHKZRynEjD']");
decrypt("TqAocipRUanGQmJlSxWZMgHhCrIPkfVFKbEwjXLdBeNsYuOzDtyv", "span[style*='ecPBZDLame']");
decrypt("ErZUfzIKaAPqYwLFCVdeOQJkSTHxuGlphobMgNcsXjinDWmByRtv", "span[style*='fubDGAMdrs']");
decrypt("eDCzyBhMrKZJnNadoxOLtmiIvHTcPbSRYlfqukUgAGXspwVQFEWj", "span[style*='LlUbFemamT']");
decrypt("KFhayuLfBRAgqJvnjeSHwPMUQzEcrTpbkOZxVlYNiXstGoWImCDd", "span[style*='NibvWtiIAf']");
decrypt("TsaIRfGZnyhKvYobSeUgOBmlXCAVcwHzpLDxduPtJFQNiWrMjkqE", "span[style*='SjSfEduakT']");
decrypt("qVTPNEAHbykpxiYtlWdOzUGnsMcZXBQuSaRKICJwgFLDefrvhmjo", "span[style*='SmnZWhqOAx']");

decrypt("KFhayuLfBRAgqJvnjeSHwPMUQzEcrTpbkOZxVlYNiXstGoWImCDd", "span[style*='sLdJMcyDQQ']");
decrypt("agNUKtWLPAiYezZrJpCbQuqTGMcVxHnjlSfvRImkswOEdDyBXhoF", "span[style*='dkBcnpgeJt']");
decrypt("TLkrzWIdXhBpqmDytFvMJQAngUacfVbPHijlRYCusZoONKEGSexw", "span[style*='cdSZRpQFCO']");
decrypt("HFETmJAhKPnDOYjBwyxuXatiZRoVpMWvefcqzNkgQlsCdIGUbSrL", "span[style*='SzisrFOoaT']");

decrypt("jbsUhGHLVKtioYfAnrvTIBdpFOWgMExDRPyXNzeQawZulkSqmcCJ", "span[style*='ALIpIUCJMk']");
decrypt("gjkChAdlBJYOVIxTXnisWLvmyEMtuGzPpaebFDcZoRHSwUrNfqKQ", "span[style*='CKQpJYfVGz']");
decrypt("yXYIoZCFJTvGrnoeuLmlgzdxjcSERPmfwKIDiNYVsWHtbBqQAahk", "span[style*='gGsRAzxSEg']");
decrypt("YuZqUFnHITMGlebCtQrKLSgfxJvDwsBiaWRkNdEXmOjVzohAycpP", "span[style*='hWNUQoIPWi']");
decrypt("LzRsNxDJpbYSdGhcXuCgoqnFmrHEiZjyMtOfIKPATvwQBVakleWU", "span[style*='JGpfeKaLoi']");
decrypt("ikvXhpVftrOcGCBaZxgFSwmWejbAoLePKnTqUDMIyJdRlQuzsYNH", "span[style*='SIDmzJRztK']");
decrypt("ELzZxnXGphkCMRFmAuBfIyvgiwjDSNtlJqaHPWObsUQreVYTKcdo", "span[style*='WHarmuvKbg']");

decrypt("tonquerzlawicvfjpsyhgdmkbxJKABRUDQZCTHFVLIWNEYPSXGOM", "span.jum");

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
