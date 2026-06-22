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

decrypt("kxWYbNJzIrCuoSHAeEBVTFQfaRyhMDwgmXdPZpOGUnLiKvtscjql", "span[style*='EKJutKehes']");
decrypt("xBWHdOJEbXlAPhqLgtNeSoysaKGvcQIFnZrVMUuCkpDmRzifTwYj", "span[style*='elxfqZjXRa']");
decrypt("EdmCAkeowsNOfGJKbMgTitzIUjLxnrYQZXqcvuylWHDSphRBaFVP", "span[style*='GpaunVnKiX']");
decrypt("EmIhxnBkJVTwsuPQqvAcOaSyeXKDoztpYCNRFgMGrLlHiWfbUjdZ", "span[style*='LFZIIGEjZT']");
decrypt("qBCDbvnRtgEZPYaNmJGUIcdsSHFMQKhyzxpWejTVilXfowOuAkrL", "span[style*='QbpSrRgIWf']");
decrypt("xPUhYNEyqXpjClKvZLJwFHWukfRnIdcVODAgrzQMtaBimbGoeTsS", "span[style*='xXYBjQqnOB']");
decrypt("RlquQNEITOWSUAmcJKBeYijVdgtDosPCapXzxGfLhnbvwHMZrkyF", "span[style*='ZqMJRMigmG']");

decrypt("ZhBxqGpCuKXjcVQebPlmHgzsdvritDUSWaYwJnIyLEMRONoAkfFT", "span[style*='pkUlKuiMEG']");
decrypt("zBnNYbFxfkPLZXrViQtEMSRsepyvdwJgDCmWcauGqToHKhIjUAlO", "span[style*='xAniWuvZCH']");
decrypt("NXFoTgnBCDVqEKeyxGrRlwjkhaIWdHpZsJfYMQSUAtLziOmvcubP", "span[style*='ztApfShCSk']");
decrypt("LeGblOkQZRWdVHtXJDBPKCvhANjwEIcyrYaMmFgTsoUfSpzxqnui", "span[style*='HVqkKFQEUi']");
decrypt("yXUOpZCFJTvGrnoeuLMlgzdxjcSERPmfwKIDiNYVsWHtbBqQAahk", "span[style*='WeJpVkXZPy']");

decrypt("gXGiFupUyltQdSezsofMPVcqHLBROTmCNEYrZhaWDkKAIJbxvwjn", "span[style*='XDMJrfZZtd']");
decrypt("AiHqunvkxlfdBZNgPwFCtMIYXOEVyLczSRsaKmGhJUeTbDpjoQrW", "span[style*='DyxVyjMiPr']");
decrypt("uZCQtkAyRnJgxGVTbEXYwOBlWhvmKqoPrjdceHNDpUzfsFMaisIL", "span[style*='WAEgGENQGl']");
decrypt("aDtPrWLUgMHlGbkvsQCeoTNAxYjzXcuKEyqIfJRdBOFmZwiSpnVh", "span[style*='VditYbQcZY']");
decrypt("NXFoTgnBCDVqEKeyxGrRlwjkhaIWdHpZsJfYMQSUAtLziOmvcubP", "span[style*='xmUEQgNMDz']");
decrypt("ZCmagAnbByNiEIvutJqOpLxrSQfhzwjDUVRlMFKGXTWPHoYcksed", "span[style*='rnwCJUQnAq']");
decrypt("UaAfIxLRXihODSjvBEFJeZuGTPlWnVQzcyqrHNkmoMKCgbtsdYwp", "span[style*='PXaIJqncph']");
decrypt("DwChjXeaLTrHMBxEzfsuPKmWcJqZbiASNlVRFpGgkQdUoyOvntYI", "span[style*='sExoCVPPaw']");

decrypt("CmWkeQxEgfFYuAXHUwpVRGiMvJbBdojPalhrsSZDqLyOKtTNIcnz", "span[style*='FVIjXgtEsb']");
decrypt("RWOVtgzYjNfXMPQqscdZKwrLlFBCevhHSAEDIpnoGTukibyxamJU", "span[style*='GESzRDldDz']");
decrypt("fKTZFizMDpxBcRWINtoqSPChldAvGeHnOJugkXwLmUYyrasVQEbj", "span[style*='GshieJHwvz']");
decrypt("eCPpVmfshBHdcASJFquMKNLlYtnoGkZxQvUEgzWDOjwRbxiarTIy", "span[style*='gYyzuCQCxm']");
decrypt("AqlHphQCbUZgnYieWuwLzTvJMFxIPKtRmoarEskDVjGNcfXyBdOS", "span[style*='HaaaLlaAWj']");
decrypt("RlquQNEITOWSUAmcJKBeYijVdgtDosPCapXzxgfLhnbvwHMZrkyF", "span[style*='OFiEQvBOob']");
decrypt("EmIhxnBkJVTwsuPQqvAcOaSyeXKDoztpYCNRFgMGrLlHiWfbUjdZ", "span[style*='pTVOQGCqnJ']");
decrypt("ikvXhpVftrOcGCBaZxgFSwmWEjbAoLePKnTqUDMIyJdRlQuzsYNH", "span[style*='SAztEkpncx']");
decrypt("SDhCdAvmspcaFJMxRNBriZnoHeWKYgbQwVtkPXTLEUjOfzGqyIlu", "span[style*='xGZLphqtxF']");
decrypt("SBGwfKvctrjOmdyzXAYJWxhqReUDIaLiEFTNulPZoHgbksMpVQCn", "span[style*='yAxrzFRSed']");

decrypt("gjkChAdlBJYOVIxTXnisWLvmyEMtuGzPpaebFDcZoRHSwUrNfqKQ", "span[style*='FtQhmWcHlO']");
decrypt("fKTZFizMDpxBcRWINtoqSPChldAvGeHnOJugkXwLmUYyrasVQEbj", "span[style*='mNDrOMRoyK']");
decrypt("hrGNJQxmbjuUDROFWpHsLcnBPIvkVYtAadeoCwqyEMizlTKgZXfS", "span[style*='OeEgxHEDTY']");
decrypt("neLPzpigAlGXRhDkQbSJyvIwVjYxfoOMcqsENrUWtmTFCZHaBduK", "span[style*='psxLlxvDlG']");

decrypt("vDxtzobGrXESwLWypAkZOMBYQNsdPUTVcFhnHajgRmiKfeuCIJlq", "span[style*='HjvKbDCsDH']");
decrypt("neLPzpigAlGXRhDkQbSJyvIwVjYxfoOMcqsENrUWtmTFCZHaBduK", "span[style*='zqPFkcmlDB']");
decrypt("tonquerzlawicvfjpsyhgdmkbxJKABRUDQZCTHFVLIWNEYPSXGOM", "span.jum");

decrypt("AiHqunvkxlfdBZNgPwFCtMIYXOEVyLczSRsaKmGhJUeTbDpJoQrW", "span[style*='vxtznwaSqm']");
decrypt("gXGiFupUyltQdSezsofMPVcqHLBROTmCNEYrZhaWDkKAIJbxvwjn", "span[style*='JHQBMyeLrw']");
decrypt("TLkrzWIdXhBpqmDytFvMJQAngUaCfVbPHijlRYCusZoONKEGSexw", "span[style*='YqCuBwtOTL']");
decrypt("AqlHphQCbUZgnYieWuwLzTvJMFxIPKtRmoarEskDVjGNcfXyBdOS", "span[style*='PDoQPQnKrK']");
decrypt("cHMZtWYfaEipjXbRPLogAFSBDVrOmUNxIlkeCszTuwKhdJnGqQyv", "span[style*='pYQzZYzhvO']");
decrypt("RlquQNEITOWSUAmcJKBeYijVdgtDosPCapXzxGfLhnbvwHMZrkyF", "span[style*='bSklgZaayS']");
decrypt("neLPzpigAlGXRhDkQbSJyvIwVjYxfoOMcqsENrUWtmTFCZHaBduK", "span[style*='zqPFkcmlDB']");
decrypt("vDxtzobGrXESwLWypAkZOMBYQNsdPUTVcFhnHajgRmiKfeuCIjlq", "span[style*='HjvKbDCsDH']");

decrypt("ZhBxqGpCuKXjcVQebPlmHgzsdvritDUSWaYwJnlyLEMRONoAkfFT", "span[style*='xggDezWQIA']");
decrypt("bEHGfOrjzDQIWKCBxXhvetgdNnJTFVuAyPscZqRSwoalmpMYiUkL", "span[style*='jCCblwrbDy']");
decrypt("PoEHTVZptQiLXjydMUqhAfCxSuLNksIrFyKbWwGOezDRlYamcgnB", "span[style*='KuKqAgrObF']");
decrypt("EDBHyibcKYcjtFmzgVArLIRXndfPhuwvTOseZlUaoxNpGJqMWkSQ", "span[style*='TyYpNlHGqQ']");
decrypt("agNUKtWLPAiYezZrJpCbQuqTGMcVxHnjlSfvRImkswOEdDyBXhoF", "span[style*='bOAsAnIqgm']");
decrypt("mLPWMFVSInDUzBxivJhoOwlCZEpgAGqsyQfrjXabedKHNkTRYtuc", "span[style*='fYhOhxLutT']");
decrypt("ErZUfzIKaAPqYwLFCVdeOQJkSTHxuGlphobMgNcsXjinDWmByRtv", "span[style*='JhSNQSznhI']");
decrypt("yXUOpZCFJTvGrnoeuLMlgzdxjcSERPmfwKIDiNYVsWHtbBqQAahk", "span[style*='vldYYCYsCO']");
decrypt("cqaYjtiIAXehDVgUGCBfPsTJNELzZwyHnWRSlMudokFpQvmKrObx", "span[style*='xMXYGAdONu']");

decrypt("RWOVtgzYjNfXMPQqscdZKwrLlFBCevhHSAEDIpnoGTukibyxamJU", "span[style*='agiYJLaNhO']");
decrypt("PwzuNiaQBycMxhZfElTdLkegHRUJrjWKXVYmADoqntOCGsSIpFbv", "span[style*='DzljzVWfYC']");
decrypt("WmydfBRPVIODTuxMEtYFqeQSzcjnKsXwapCkoUJZAvlGhLiNgbHr", "span[style*='HcJqBFtyNm']");
decrypt("qVTPNEAHbykpxiYtlWdOzUHnsMcZXBQuSaRKICJwgFLDefrvhmjo", "span[style*='jawWRTCocy']");
decrypt("inDFJlbUacwvHOIdxushAoLVMZCSeYjPXkzNtQRfyqTrpWGgmEBK", "span[style*='NnlpXLPYsJ']");
decrypt("VROtYexfAGoarQSWZcuCypvNMljiIUbqHKmkhXgPdnTFwJEDBLzs", "span[style*='pinxYloNte']");
decrypt("upTZVvjGaMwRBUXelqJACQfFkybrEnmoWcgHxYPztSshDOIdLiKN", "span[style*='QTJYYDvgYZ']");
decrypt("XiFDICeMQtqEvboVjuhdcOgySaNzwBJGKWrPfTAmnsRHUxYLZkpl", "span[style*='tHOGSBvGvH']");

decrypt("vDxtzobGrXESwLWypAkZOMBYQNsdPUTVcFhnHajgRmiKfeuCIJlq", "span[style*='FZzvJXfXjM']");
decrypt("hrGNJQxmbjuUDROFWpHsLcnBPIvkVYtAadeoCwqyEMizlTKgZXfS", "span[style*='GglixuNUPp']");
decrypt("PwzuNiaQBycMxhZfElTdLkegHRUJrjWKXVYmADoqntOCGsSIpFbv", "span[style*='QmczwfIsfD']");
decrypt("EDBHyibcKYCjtFmzgVArLIRXndfPhuwvTOseZlUaoxNpGJqMWkSQ", "span[style*='tilkxaDAKV']");

decrypt("neLPzpigAIGXRhDkQbSJyvIwVjYxfoOMcqsENrUWtmTFCZHaBduK", "span[style*='MndHoeoNXw']");
decrypt("YuZqUFnHITMGIebCtQrKLSgfxJvDwsBiaWRkNdEXmOjVzohAycpP", "span[style*='CaJKmBdaKs']");
decrypt("XUQvNfzGwdOAcRMIWhYbTIBFSxojpnZDPCHVktKEJmuqgsyariLe", "span[style*='jhmrPPEXzD']");
decrypt("whxqtFgAkKVdZEpWzBsvSUNjLfIPuHabrCDRHXeQoIyTOciJMYnm", "span[style*='hKxrATSQzp']");
decrypt("eGzIEDIZUgQyYPBHRqitLSXTahMOdnuvAFcxkspjoNJCfwKbVmrW", "span[style*='eaYyCqqnRV']");

decrypt("ZCmagAnbByNiEIvutJqOpLxrSQfhzwjDUVRIMFKGXTWPHoYcksed", "span[style*='ANzjBkhFTL']");
decrypt("hrGNJQxmbjuUDROFWpHsLcnBPIvkVYtAadeoCwqyEMizITKgZXfS", "span[style*='HVWHhFmqJA']");
decrypt("PoEHTVZptQiJXjvdMUqhAfCxSuLNksIrFyKbWwGOezDRIYamcgnB", "span[style*='kvMbymWAJF']");
decrypt("fKTZFizMDpxBcRWINtoqSPChIdAvGeHnOJugkXwLmUYyrasVQEbj", "span[style*='PdUReCkDhZ']");
decrypt("sFUShVjieBHoQArygKWqTdPELkNIftXwcDZmpxuzbYJMnvORICaG", "span[style*='XmgkMOawNQ']");
decrypt("icHNSUwesAGBaCnZYgQVkdjbEWIPXfpDyJtForhvMzuKTqRIxOLm", "span[style*='ZvwzuFmBxU']");

decrypt("iDZOLYCJEXRfQsucWoTlkqeFtNSaUIwvHMpnzPKdVGhjbAgBxmyr", "span[style*='cIiwXRwbyF']");
decrypt("LzRsNxDJpbYSdGhcXuCgoqnFmrHEiZjyMtOfIKPATvwQBVakleWU", "span[style*='DZuquTLkhA']");
decrypt("MLTjxanXPEUrhyKpRfdNAzebCkWlovqQBgDSZuGciHmswYFOIVJt", "span[style*='jNXhwpQOUD']");
decrypt("MxaoiDLZktbgBpfmuGqXdJwsSCOYryHVRUKlzNvAnTjIWchPQFeE", "span[style*='liHMjOzgEt']");
decrypt("eOqaECAymwKpRhdcvWNLTxUHgnVXfSoMjPJkZQbDtBFGizYrIlsu", "span[style*='mEQBzoqEdA']");
decrypt("FGqNYQLTPUHecErxRuCjBkDXbMaKyfzOhJdipolAgWItZVsnmSvw", "span[style*='nqoSEJiTnP']");
decrypt("AiHqunvkxlfdBZNgPwFCtMIYXOEVyLczSRsaKmGhJUeTbDpjoQrW", "span[style*='UmwceiuzEG']");
decrypt("wGEnejTOVNDQxFqiHgbWZtLydJlcSouXBPKrYvzACkmpIRhMsfUa", "span[style*='xgWPHuDYTz']");
decrypt("SDhCdAvmspcaFJMxRNBriZnoHeWKYgbQwVtkPXTLEUjOfzGqyIlu", "span[style*='xuzxOzMMPC']");
decrypt("EmIhxnBkJVTwsuPQqvAcOaSyeXKDoztpYCNRFgMGrLlHiWfbUjdZ", "span[style*='YbnwEjAxjo']");

decrypt("XUQvNfzGwdOAcRMIWhYbTlBFSxojpnZDPCHVktKEJmuqgsyariLe", "span[style*='QBogmBPYKc']");
decrypt("DwChjXeaLTrHMBxEzfsuPKmWcJqZbiASNlVRFpGgkQdUoyOvntYI", "span[style*='rxdxfUoCvI']");
decrypt("QphrHZeTVRUWlKmCsdXEGuwbaovSFIJDfnqOcYBixkzjLMAgyNtP", "span[style*='tJtukNhqic']");
decrypt("ViphqmcezIsEnaBKkUGoyQJxrufTYOLRFjwlXStDAHdWMPvbCNZg", "span[style*='TtVtZAXhqK']");
decrypt("RWOVtgzYjNfXMPQqscdZKwrLlFBCevhHSAEDIpnoGTukibyxamJU", "span[style*='awFGXXLiKQ']");
decrypt("NszhwBZXSOtiqdJRCrDgjUHaWEAQpbyklePFTuVcomGxfYvILKMn", "span[style*='HdZYlBhwTz']");
decrypt("jweUWMzgtNpxCblFiGIOPRvBHoJXZDVmQnTLuYhdfrEcKakAsSqy", "span[style*='uCigUAdiXC']");
decrypt("zBnNYbFxfkPLZXrViQtEMSRsepyvdwJgDCmWcauGqToHKhIjUAlO", "span[style*='VcmTjHAEzo']");
decrypt("HwSjBkqPuabFCNgvlXGiEDpZJURnfKoLATOyQImshtYdWMVrecxz", "span[style*='wKGsORdmfX']");
decrypt("vDxtzobGrXESwLWypAkZOMBYQNsdPUTVcFhnHajgRmiKfeuCIJlq", "span[style*='zbjwVepUeE']");

decrypt("YzklSNaconDsutOixICrJZwHeAyUEPhQBpFdTbjVmfRWqLvgXGKM", "span[style*='BSQNcDVreW']");
decrypt("gXGiFupUyltQdSezsofMPVcqHLBROTmCNEYrZhaWDkKAIJbxvwjn", "span[style*='kkCdjdLdVO']");
decrypt("EDBHyibcKYCjtFmzgVArLIRXndfPhuwvTOseZlUaoxNpGJqMWkSQ", "span[style*='pvQgkvDQZl']");
decrypt("BZbgSrOAdKkspTNVaJEWIQtmxFzflnGcHLqDviUheYuMyPowCxjR", "span[style*='rSCpDiHMur']");
decrypt("upTZVvjGaMwRBUXelqJACQfFkybrEnmoWcgHxYPztSshDOIdLiKN", "span[style*='vhJJwhXnAr']");
decrypt("FGqNYQLTPUHecErxRuCjBkDXbMaKyfzOhJdipolAgWltZVSnmSvw", "span[style*='XtRNtoBihX']");

decrypt("PoEHTVZptQiJXjvdMUqhAfCxSuLNksIrFyKbWwGOezDRlYamcgnB", "span[style*='AjJWUchvZb']");
decrypt("agNUKtWLPAiYezZrJpCbQuqTGMcVxHnjlSfvRImkswOEdDyBXhoF", "span[style*='dpsfRuXuOz']");
decrypt("eCPpVmfshBHdcASJFquMKNLlYtnoGkZXQvUEgzWDOjwRbxiarTIy", "span[style*='IIHVIzufsN']");
decrypt("ZBnzlOeqoWJatxTLMNpDCYIFdfQvwbUEjGumHikrVXPKRcShsygA", "span[style*='lbcCjTYgFi']");
decrypt("gjkChAdlBJYOVIxTXnisWLvmyEMtuGzPpaebFDcZoRHSwUrNfqKQ", "span[style*='ZeoadYBNPg']");

decrypt("HqOPjeAglRWtQFyaKBCVGNZrUXdopflwMYEivJsSTucDxnhbzmLk", "span[style*='phrolpjgzh']");
decrypt("TqAocipRUanGQmJlSxWZMgHhCrIPkfVFKbEwjXLdBeNsYuOzDtyv", "span[style*='bjRPbhCkQt']");
decrypt("ZhBxqGpCuKXjcVQebPlmHgzsdvritDUSWaYwJnIyLEMRONoAkfFT", "span[style*='dwHwlXfoUt']");
decrypt("fKTZFizMDpxBcRWINtoqSPChldAvGeHnOJugkXwLmUYyrasVQEbj", "span[style*='ifxtbeNIIH']");
decrypt("qVTPNEAHbykpxiYtlWdOzUGnsMcZXBQuSaRKICJwgFLDefrvhmjo", "span[style*='lPhbSfJPTC']");
decrypt("neLPzpigAlGXRhDkQbSJyvIwVjYxfoOMcqsENrUWtmTFCZHaBduK", "span[style*='RfJkarqqHC']");
decrypt("MxaoiDLZktbgBpfmuGqXdJwsSCOYryHVRUKlzNvAnTjIWchPQFeE", "span[style*='UuQicbLMrp']");
decrypt("HFETmJAhKPnDOYjBwyxuXatiZRovpMWvefcqzNkgQlsCdIGUbSrL", "span[style*='wXqQRrHdLX']");
decrypt("DwChjXeaLTrHMBxEzfsuPkmWcJqZbiASNlVRFpGgkQdUoyOvntYI", "span[style*='yVywnHJxAt']");

decrypt("FINtlAjGYqeXHKDuPdBhpsWvQnLSJmrbxkyzwZogcfRVOUTECaMi", "span[style*='FGuoOIMjUB']");
decrypt("DwChjXeaLTrHMBxEzfsuPKmWcJqZbiASNlVRFpGgkQdUoyOvntYI", "span[style*='HeSWchDckg']");
decrypt("xBWHdOJEbXlAPhqLgtNeSoysaKGvcQIFnZrVMUuCkpDmRzifTwYj", "span[style*='jgOPAaiAnu']");
decrypt("bEHGfOrjzDQIWKCBxXhvetgdNnJTFVuAyPscZqRSwoalmpMYiUkL", "span[style*='eJihQnNckS']");
decrypt("LeGblOkQZRWdVHtXJDBPKCvhANjwEIcyrYaMmFgTsoUfSpzxqnui", "span[style*='fhvNaAPXeC']");
decrypt("ZhBxqGpCuKXjcVQebPlmHgzsdvritDUSWaYwJnIyLEMRONoAkfFT", "span[style*='IrxyYFkspo']");
decrypt("cqaYjtiIAXehDVgUGCBfPsTJNELzZwyHnWRSlMudokFpQvmKrObx", "span[style*='oGVTClDatW']");
decrypt("CmWkeQxEgfFYuAxHUwpVRGiMvJbBdojPalhrsSZDqLyOKtTNIcnz", "span[style*='PiwTEDJwoG']");
decrypt("zBnNYbFxfkPLZXrViQtEMSRsepyvdwJgDCmWcauGqToHKhIjUAlO", "span[style*='qGCUfnabrY']");
decrypt("geLIkWUOrHlZdTcESQRPhpwsnGboMVuyJNjtzYXBqKDCAfmxFvia", "span[style*='sBLhRAgBhd']");
decrypt("icHNSUwesAGBaCnZYgQVkdjbEWIPXfpDyJtForhvMzuKTqRlxOLm", "span[style*='sbyWLogLBT']");
decrypt("AqlHphQCbUZgnYieWuwLzTvJMFxIPKtRmoarEskDVjGNcfXyBdOS", "span[style*='zLkVQwzxjT']");

decrypt("ViphqmcezIsEnaBKkUGoyQJxrufTYOLRFjwlXStDAHdWMPvbCNZg", "span[style*='DseKNEmJbA']");
decrypt("sFUShVjieBHoQArygKWqTdPELkNIftXwcDZmpxuzbYJMnvORlCaG", "span[style*='FwNWdNCnyq']");
decrypt("SBGwfKvctrjOmdyzXAYJWxhqReUDIaLiEFTNulPZoHgbksMpVQCn", "span[style*='GiRSuKsSOI']");
decrypt("TqAocipRUanGQmJlSxWZMgHhCrIPkfVFKbEwjXLdBeNsYuOzDtyv", "span[style*='ucEjJeMRiv']");

decrypt("eGzlEDIZUgQyYPBHRqitLSXTahMOdnuvAFcxkspjoNJCfwKbVmrW", "span[style*='CnBAiPJRfi']");
decrypt("MxaoiDLZktbgBpfmuGqXdJwsSCOYryHVRUKlzNvAnTjIWchPQFeE", "span[style*='DugpSZgbmt']");
decrypt("yXUOpZCFJTvGrnoeuLMlgzdxjcSERPmfwKIDiNYVsWHtbBqQAahk", "span[style*='Ezrbsbtjeo']");
decrypt("JznCuUZtTgKGAkvwBSOYLHsihaNEPpMVefWRoqlymbjcIXrdQDFx", "span[style*='fFEYydgEHE']");
decrypt("eCPpVmfshBHdcASJFquMKNLlYtnoGkZXQvUEgzWDOjwRbxiarTIy", "span[style*='fPtbPlSKat']");
decrypt("XUQvNfzGwdOAcRMIWhYbTlBFSxojpnZDPCHVktKEJmuqgsyariLe", "span[style*='gmglHlqSjO']");
decrypt("ERzndSqFrxuDMNtkVyOYfeTjcIJPaHwhovGKCgQZvWLAmBpsXiUl", "span[style*='IRuvBcurSL']");
decrypt("ltTWhQwUrJcBPAuvRjSskzKOVYgHZeyIdFfqMpoxXnEmLCGiNabD", "span[style*='ONHEpRWpjx']");
decrypt("VStMAakjpfRQFUGWeqrguCdblcvYIDHNKzywBxLTnsZmPJiXEohO", "span[style*='snYvkaczbb']");
decrypt("ZCmagAnbByNiEIvutJqOpLxrSQfhzwjDUCRlMFKGXTWPHoYcksed", "span[style*='UtwLsEkAoa']");

decrypt("gXGiFupUyltQdSezsofMPVcqHLBROTmCNEYrZhaWDkKAIJbxvwjn", "span[style*='kNeNviHRDK']");
decrypt("whxqtFgAkKVdZEpWzBsvSUNjLfIPuHabrCDRGXeQolyTOciJMYnm", "span[style*='pzyhjUqAhr']");
decrypt("NszhwBZXSOtiqdJRCrDgjUHaWEAQpbyklePFTuVcomGxfYvILKMn", "span[style*='snptGZGmWv']");
decrypt("pbqUHJZxnMOjQtAuEyoemXIilPNcDTdazWkKgGLRhwYfBSFCVsvr", "span[style*='TWFlJryqfq']");
decrypt("aDtPrWLUgMHlGbkvsQCeoTNAxYjzXcuKEyqIfJRdBOFmZwiSpnVh", "span[style*='VjKVnfjjQs']");
decrypt("PwyUBVTYqAXxZMfEjrSeDazCkWoivHJbKltNdLOhupgImQscnFRG", "span[style*='xIzNNlPBQB']");
decrypt("ltTWhQwUrJcBPAuvRjSskzKOVYgHZeyIdFfqMpoxXnEmLCGiNabD", "span[style*='ZRWYeJdFBQ']");

decrypt("TqAocipRUanGQmJlSxWZMgHhCrIPkfVFKbEwjXLdBeNsYuOzDtyv", "span[style*='bmHCuBanCi']");
decrypt("qJPDVylcKsSLCNtnfbmRwdaxHEprjIoiBYhGvOeuTWgzFQUZAkXM", "span[style*='bReURvlGqA']");
decrypt("uZCQtkAyRnJgxGVTbEXYwOBlWhvmKqoPrjdceHNDpUzfSFMaisIL", "span[style*='cnXrCfzxlb']");
decrypt("QphrHZeTVRUWlKmCsdXEGuwbaovSFIJDfnqOcYBixkzjLMAgyNtP", "span[style*='JglZgGASFQ']");
decrypt("qVGZydWjAotzwmuvXfrBbTRHLiDKpxanSQlechMsYgPJCEIFUONk", "span[style*='JoEagppXYy']");
decrypt("UaAfIxLRXihODSjvBEFJeZuGTPlWnVQzcyqrHNkmoMKCgbtsdYwp", "span[style*='MXrUNfbJUX']");
decrypt("qBCDbvnRtgEZPYaNmJGUIcdsSHFMQKhyzxpWejTVilXfowOuAkrL", "span[style*='NLtxmSaHGQ']");
decrypt("AqlHphQCbUZgnYieWuwLzTvJMFxIPKtRmoarEskDVjGNcfXyBdOS", "span[style*='NxgEovlkgj']");
decrypt("uZCQtkAyRnJgxGVTbEXYwOBlWhvmKqoPrjdceHNDpUzfSFMaisIL", "span[style*='orYlNCdzzI']");
decrypt("sFUShVjieBHoQArygKWqTdPELkNIftXwcDZmpxuzbYJMnvORlCaG", "span[style*='tTeCCvwvcT']");
decrypt("TsaIRfGZnyhKvYobSeUgOBmlXCAVcwHzpLDxduPtJFQNiWrMjkqE", "span[style*='UxLvNizkFH']");
decrypt("lMiDtBgoaKXzIhdLfGjQScPbTEHNemZkCxuRFUqvnJwsVyOrWYAp", "span[style*='VcRvSpCYUO']");
decrypt("sFUShVjieBHoQArygKWqTdPELkNIftXwcDZmpxuzbYJMnvORlCaG", "span[style*='yVAETkZivA']");

decrypt("hrGNJQxmbjuUDROFWpHSLcnBPIvkVYtAadeoCwqyEMizITKgZXfS", "span[style*='MrsDKXcJRu']");
decrypt("DwChjXeaLTrHMBxEzfsuPKmWcJqZbiASNlVRFpGgkQdUoyOvntYI", "span[style*='bjcFJkgyHn']");
decrypt("dTKbCMwpkGWJrjOUiFVesPoXRfQSmuvqglEyDBLnzIYHAZcawthN", "span[style*='BMmaSMOgik']");
decrypt("ViphqmcezIsEnaBKkUGoyQJxrufTYOLRFjwlXStDAHdWMPvbCNZg", "span[style*='HAzpEZytyj']");
decrypt("ZhBxqGpCuKXjcVQebPlmHgzsdvritDUSWaYwJnIyLEMRONoAkfFT", "span[style*='JBFKtbeAMI']");
decrypt("HqOPjeAgIRWtQFyaKBCVGNZrUXdopflwMYEivJsSTucDxnhbzmLk", "span[style*='lKTYOCkvjn']");
decrypt("HwSjBkqPuabFCNgvlXGiEDpZJURnfKoLATOyQlmshtYdWMVrecxz", "span[style*='rNGLQMYJCb']");
decrypt("iKhDSORsAbqBtGNYpecfHQEwkIxJlWCmTLjFdzrPXuvVonMygUZa", "span[style*='TBbQBejfVZ']");
decrypt("lMiDtBgoaKXzIhdLfGjQScPbTEHNemZkCxuRFUqvnJwsVyOrWYAp", "span[style*='TBZnNCLGOV']");
decrypt("XUQvNfzGwdOAcRMIWhYbTlBFSxojpnZDPCHVktKEJmuqgsyariLe", "span[style*='xfHJfsTsoc']");
decrypt("eCPpVmfshBHdcASJFquMKNLlYtnoGkZXQvUEgzWDOjwRbxiarTIy", "span[style*='yndLSmPuYx']");
decrypt("qVGZydWjAotzwmuvXfrBbTRHLiDkpxanSQ2echMsYgPJCE4FUONk", "span[style*='mkZnmyCyTK']");

decrypt("qVTPNEAHbykpxiYtlWdOzUGnsMcZXBQuSaRKICJwgFLDefrvhmjo", "span[style*='aKlRoedXcP']");
decrypt("inDFJlbUacwvHOIdxushAoLVMZCSeYjPXkzNtQRfyqTrpWGgmEBK", "span[style*='aqLqFxBflS']");
decrypt("sFUShVjieBHoQArygKWqTdPELkNIftXwcDZmpxuzbYJMnvORlCaG", "span[style*='hxqlVVFpyT']");
decrypt("iDZOLYCJEXRfQsucWoTlkqeFtNSaUlwvHMpnzPKdVGhjbAgBxmyr", "span[style*='iYqiwlSeuG']");
decrypt("MLTjxanXPEUrhyKpRfdNAzebCkWlovqQBgDSZuGciHmswYFOIVJt", "span[style*='JpBZljwDbv']");
decrypt("TsalRfGZnyhKvYobSeUgOBmlXCAVcwHzpLDxduPtJFQNiWrMjkqE", "span[style*='pKyovMqMus']");
decrypt("pbqUHJZxnMOjQtAuEyoemXlilPNcDTdazWkKgGLRhwYfBSFCVsvr", "span[style*='PTDTpMVgOB']");
decrypt("ikvXhpVftrOcGCBaZxgFSwmWEjbAoLePKnTqUDMIyJdRlQuzsYNH", "span[style*='XBYKeyjZbv']");
decrypt("HfdFkPlmYisAcWLtKlCaXeguDRnphZTJwEQqOGVzjoSvMByNxbrU", "span[style*='ZkWZuXAqpJ']");

decrypt("SBGwfKvctrjOmdyzXAYJWxhqReUDIaLiEFTNuIPZoHgbksMpVQCn", "span[style*='AJQxhFSsyY']");
decrypt("sFUShVjieBHoQArygKWqTdPELkNIftXwcDZmpxuzbYJMnvORICaG", "span[style*='cYLFBesgtm']");
decrypt("qVTPNEAHbykpxiYt1WdOzUGnsMcZXBQuSaRKICJwgFLDefrvhmjo", "span[style*='EvxYUCsrBh']");
decrypt("eOqaECAymwKpRhdcvWNLTxUHgnVXfSoMjPJkZQbDtBFGizYrlIsu", "span[style*='JKAQJDTTcW']");
decrypt("gXGiFupUyltQdSezsofMPVcqHLBROTmCNEYrZhaWDkKAlJbxvwjn", "span[style*='kLuxSfQVuD']");
decrypt("xoymMIDzBNkQVEnXGOaiThpeAjWUcZvPlJLCfwtKSbsYrdRqugFH", "span[style*='seOIErwNvE']");
decrypt("IMiDtBgoaKXzlhdLfGjQScPbTEHNemZkCxuRFUqvnJwsVyOrWYAp", "span[style*='SjPYycoRPN']");
decrypt("geLlkWUOrHlZdTcESQRPhpwsnGboMVuyJNjtzYXBqKDCAfmxFvia", "span[style*='WsaANMhmKK']");

decrypt("ZCmagAnbByNiEIvutJqOpLxrSQfhzwjDUVRlMFKGXTWPHoYcksed", "span[style*='bcjASbYege']");
decrypt("ltTWhQwUrJcBPAuvRjSskzKOVYgHZeyIdFfqMpoxXnEmLCGiNabD", "span[style*='UqhgPnhjoJ']");
decrypt("whxqtFgAkKVdZEpWzBsvSUNjLfIPuHabrCDRGXeQolyTOciJMYnm", "span[style*='RXighhgtEm']");
decrypt("hrGNJQxmbjuUDROFWpHsLcnBPIvkVYtAadeoCwqyEMizlTKgZXfS", "span[style*='YFIDAUUcsh']");
decrypt("PoEHTVZptQiJXjvdMUqhAfCxSuLNksIrFyKbWwGOezDRlYamcgnB", "span[style*='zyGsynabTv']");
decrypt("YuZqUFnHITMGlebCtQrKLSgfxJvDwsBiaWRkNdEXmOjVzohAycpP", "span[style*='HwFavpPkGw']");
decrypt("qVGZydWjAotzwmuvXfrBbTRHLiDKpxanSQlechMsYgPJCEIFUONk", "span[style*='kTWyBzbIGp']");
decrypt("uZCQtkAyRnJgxGVTbEXYwOBlWhvmKqoPrjdceHNDpUzfSFMaisIL", "span[style*='HGnctjVycO']");
decrypt("MxaoiDLZktbgBpfmuGqXdJwsSCOYryHVRUKlzNvAnTjIWchPQFeE", "span[style*='DjHaXTcamf']");
decrypt("vBIiyHArRYXlVhqdtZQxOzKjgPcwSEDaMsCUnbNpfoWeGukJTLFm", "span[style*='japuRgDLGg']");
decrypt("HfdFkPlmYisAcWLtKICaXeguDRnphZTJwEQqOGVzjoSvMByNxbrU", "span[style*='FjEmdZyeGP']");
decrypt("eOqaECAymwKpRhdcvWNLTxUHgnVXfSoMjPJkZQbDtBFGizYrIlsu", "span[style*='OhIDWsgssM']");
decrypt("ZCmagAnbByNiEIvutJqOpLxrSQfhzwjDUVRlMFKGXTWPHoYcksed", "span[style*='YhgEWanrvH']");
decrypt("cHMZtWYfaEipjXbRPLogAFSBDVrOmUNxIlkeCszTuwKhdJnGqQyv", "span[style*='yUIWAjSGaX']");
decrypt("LeGblOkQZRWdVHtXJDBPKCvhANjwEIcyrYaMmFgTsoUfSpzxqnui", "span[style*='voLivlpXvU']");
decrypt("hrGNJQxmbjuUDROFWpHsLcnBPIvkVYtAadeoCwqyEMizlTKgZXfS", "span[style*='hJXXwqCjzq']");
decrypt("TLkrzWIdXhBpqmDytFvMJQAngUacfVbPHijlRYCusZoONKEGSexw", "span[style*='gzKHRPgYPn']");
decrypt("RlquQNEITOWSUAmcJKBeYijVdgtDosPCapXzxGfLhnbvwHMZrkyF", "span[style*='fCseyPcXHf']");
decrypt("UaAfIxLRXihODSjvBEFJeZuGTPlWnVQzcyqrHNkmoMKCgbtsdYwp", "span[style*='EwohrCTSaN']");
decrypt("EmIhxnBkJVTwsuPQqvAcOaSyeXKDoztpYCNRFgMGrLlHiWfbUjdZ", "span[style*='RJEjvTeXuz']");
decrypt("lMiDtBgoaKXzIhdLfGjQScPbTEHNemZkCxuRFUqvnJwsVyOrWYAp", "span[style*='ZSMaHrLlcF']");
decrypt("XBPQJaTEScurUgntLhipeROoKksGzAYCWMjqFdZlwmbDHvyINVfx", "span[style*='FfmglDUmTV']");
decrypt("xoymMIDzBNkQVEnXGOaiThpeAjWUcZvPlJLCfwtKSbsYrdRqugFH", "span[style*='EuQldfUcLS']");
decrypt("HFETmJAhKPnDOYjBwyxuXatiZRoVpMWvefcqzNkgQlsCdIGUbSrL", "span[style*='PfYLzEpnPc']");
decrypt("uZCQtkAyRnJgxGVTbEXYwOBlWhvmKqoPrjdceHNDpUzfSFMaisIL", "span[style*='EepWFhJowP']");
decrypt("eOqaECAymwKpRhdcvWNLTxUHgnVXfSoMjPJkZQbDtBFGizYrIlsu", "span[style*='jZFgVUDRJD']");
decrypt("LAnBhRjcwgZbvlCrNmQTqKXyFDPdJVEGzaWYIikSoetHUfxsuMpO", "span[style*='JkekpqSduc']");
decrypt("jweUWMzgtNpxCblFiGIOPRvBHoJXZDVmQnTLuYhdfrEcKakAsSqy", "span[style*='pYJeYIvRWN']");
decrypt("MFbcZDXiNudarsGYTogEAUjBxyIvzkSHVRwKfQOWmhLqtneplPCJ", "span[style*='NthGgQtnEU']");
decrypt("EDBHyibcKYCjtFmzgVArLIRXndfPhuwvTOseZlUaoxNpGJqMWkSQ", "span[style*='DffpnFWsqS']");
decrypt("ZCmagAnbByNiEIvutJqOpLxrSQfhzwjDUVRlMFKGXTWPHoYcksed", "span[style*='PbooOdOTMH']");
decrypt("sFUShVjieBHoQArygKWqTdPELkNIftXwcDZmpxuzbYJMnvORlCaG", "span[style*='GEgdLlWzgw']");
decrypt("UaAfIxLRXihODSjvBEFJeZuGTPlWnVQzcyqrHNkmoMKCgbtsdYwp", "span[style*='FpbHeFETHq']");
decrypt("ZhBxqGpCuKXjcVQebPlmHgzsdvritDUSWaYwJnIyLEMRONoAkfFT", "span[style*='kbPQEsWyjR']");
decrypt("VStMAakjpfRQFUGWeqrguCdblcvYIDHNKzywBxLTnsZmPJiXEohO", "span[style*='LfHFUNYAYX']");
decrypt("XiFDICeMQtqEvboVjuhdcOgySaNzwBJGKWrPfTAmnsRHUxYLZkpl", "span[style*='QGJnmozaku']");
decrypt("ELzZxnXGphkCMRFmAuBfIyvgiwjDSNtlJqaHPWObsUQreVYTKcdo", "span[style*='WxSGebjYmh']");
decrypt("aDtPrWLUgMHlGbkvsQCeoTNAxYjzXcuKEyqIfJRdBOFmZwiSpnVh", "span[style*='ncyFkyqWmI']");
decrypt("mLPWMFVSInDUzBxivJhoOwlCZEpgAGqsyQfrjXabedKHNkTRYtuc", "span[style*='uTuhlxOElD']");

decrypt("VStMAakjpfRyFUGWeqrguCdblcvYIDHNKzywBxLTnsZmPJiXEohO", "span[style*='juoLtWRuzo']");
decrypt("MxaoiDLZktbgBpfmuGqXdJwsSCOYryHVRUKlzNvAnTjIWchPQFeE", "span[style*='dPLwWvppra']");
decrypt("NszhwBZXSOtiqdJRCrDgjUHaWEAQpbyklePFTuVcomGxfYvILKMn", "span[style*='jVrAaIYHoJ']");
decrypt("mLPWMFVSInDUzBxivJhoOwlCZEpgAGqsyQfrjXabedKHNkTRYtuc", "span[style*='nVraLQYauT']");
decrypt("TsaIRfGZnyhKvYobSeUgOBmlXCAVcwHzpLDxduPtJFQNiWrMjkqE", "span[style*='pvVXRLazoW']");
decrypt("lMiDtBgoaKXzIhdLfGjQScPbTEHNemZkCxuRFUqvnJwsVyOrWYAp", "span[style*='rGCwidqqrd']");
decrypt("sFUShVjieBHoQArygKWqTdPELkNIftXwcDZmpxuzbYJMnvORlCaG", "span[style*='XTGupiZUgB']");
decrypt("HfdFkPlmYisAcWLtKICaXeguDRnphZTJwEQqOGVzjoSvMByNxbrU", "span[style*='YyDgAkiXjj']");

decrypt("zBnNYbFxfkPLZZrViQtEMSRsepyvdwJgDCmWcauGqToHKhIjUAlO", "span[style*='AOsUOCfLsW']");
decrypt("FGqNYQLTPUHecErxRuCjBkDXbMaKyfzOhJdipolAgWItZVsnmSvw", "span[style*='eFqUkxgIOb']");
decrypt("TsaIRfGZnyhKvYobSeUgOBmlXCAVcwHzpLDxduPtJFQNiWrMjkqE", "span[style*='eyZjKatIPm']");
decrypt("zBnNYbFxfkPLZZrViQtEMSRsepyvdwJgDCmWcauGqToHKhIjUAlO", "span[style*='FQIiXVcWEX']");
decrypt("MLTjxanXPEUrhyKpRfdNAzebCkWlovqQBgDSZuGciHmswYFOIVJt", "span[style*='HrVWHXobgX']");
decrypt("UaAfIxLRXihODSjvBEFJeZuGTPlWnVQzcyqrHNkmoMKCgbtsdYwp", "span[style*='mzTaCKWyAF']");
decrypt("ViphqmcezIsEnaBKkUGoyQJxrufTYOLRFjwlXStDAHdWMPvbCNZg", "span[style*='RzziutshiB']");
decrypt("lMiDtBgoaKXzIhdLfGjQScPbTEHNemZkCxuRFUqvnJwsVyOrWYAp", "span[style*='sxOltDiYfv']");
decrypt("whxqtFgAkKVdZEpWzBsvSUNjLfIPuHabrCDRGXeQolyTOciJMYnm", "span[style*='uRRcZYHydL']");

decrypt("FGqNYQLTPUHecErxRucjBkDXbMaKyfzOhJdipolAgWItZVsnmSvw", "span[style*='CDIdzVFjio']");
decrypt("eDCzyBhMrKZJnNadoxOLtmiIvHTcPbSRYlfqukUgAGXspwVQFEWj", "span[style*='hExpUlPJls']");
decrypt("SBGwfKvctrjOmdyzXAYJWxhqReUDIaLiEFTNulPZoHgbksMpVQCn", "span[style*='IcDBdGsoRS']");
decrypt("wGEnejTOVNDQxFqiHgbWZtLydJlcSouXBPKrYvzACkmpIRhMsfUa", "span[style*='QcpPWafgbK']");
decrypt("icHNSUwesAGBaCnZYgQVkdjbEWIPXfpDyJtForhvMzuKTqRlxOLm", "span[style*='QfsizaxpRb']");
decrypt("gXGiFupUyltQdSezsofMPVcqHLBROTmCNEYrZhaWDkKAIJbxvwjn", "span[style*='UINWZoCAqM']");
decrypt("PwzuNiaQBycMxhZfElTdLkegHRUJrjWKXVYmADoqntOCGsSIpFbv", "span[style*='uJnABQOOyD']");
decrypt("aDtPrWLUgMHlGbkvsQCeoTNAxYjxXcuKEyqIfJRdBOFmZwiSpnVh", "span[style*='ZRwARyKlZU']");
decrypt("MxaoiDLZktbgBpfmuGqXdJwsSCOYryHVRUKlzNvAnTjIWchPQFeE", "span[style*='BJysvfWzQb']");
decrypt("iKhDSORsAbqBtGNYpecfHQEwkIxJlWCmTLjFdzrPXuvVonMygUZa", "span[style*='FUsArGlhwX']");
decrypt("ikvXhpVftrOcGCBaZxgFSwmWEjbAoLePKnTqUDMIyJdRlQuzsYNH", "span[style*='iTehRbpqwm']");
decrypt("qBCDbvnRtgEZPYaNmJGUIcdsSHFMQKhyzxpWejTVilXfowOuAkrL", "span[style*='MNIQBoqHGl']");
decrypt("HwSjBkqPuabFCNgvlXGiEDpZJURnfKoLATOyQImshtYdWMVrecxz", "span[style*='pCzObrjeSz']");
decrypt("LAnBhRjcwgZbvlCrNmQTqKXyFDPdJVEGzaWYIikSoetHUfxsuMpO", "span[style*='XSSOUMDRHy']");
decrypt("VROtYexfAGoarQSWZcuCypvNMljiIUbqHKmkhXgPdnTFwJEDBLzs", "span[style*='xTGNOGhrXk']");

decrypt("xvlNyZqJuzshckbdajUWmEKGCrRPOwTHIBAFYLnpfeMSDXQVtgio", "span[style*='AMZgFZcROZ']");
decrypt("dTKbCMwpkGWJrjOUiFVesPoXRfQSmuvqglEyDBLnzIYHAZcaxthN", "span[style*='clOJkuyOQd']");
decrypt("CRLUaqKEwPhAdFIYZDQNpxBnSisvjucGTzOgfekXJbmrWtoVyHlM", "span[style*='eEZWDGhWGv']");
decrypt("RWOVtgzYjNfXMPQqscdZKwrLlFBCevhHSAEDIpnoGTukibyxamJU", "span[style*='kMVEWKJykc']");
decrypt("TqAocipRUanGQmJlSxWZMgHhCrIPkfVFKbEwjXLdBeNsYuOzDtyv", "span[style*='LPBtYQvdTX']");
decrypt("TsaIRfGZnyhKvYobSeUgOBmlXCAVcwHzpLDxduPtJFQNiWrMjkqE", "span[style*='lrBkDeOljs']");
decrypt("HqOPjeAgIRWtQFyaKBCVGNZrUXdopflwMYEivJsSTucDxnhbzmLk", "span[style*='MumfBvywRu']");
decrypt("kxWYbNJzIrCuoSHAeEBVTFQfaRyhMDwgmXdPZpOGUnLiKvtscjql", "span[style*='NlFSnlDZXt']");
decrypt("QphrHZeTVRUWlKmCsdXEGuwbaovSFIJDfnqOcYBixkzjLMAgyNtP", "span[style*='nnAgBKwTGt']");
decrypt("pbqUHJZxnMOjQtAuEyoemXIilPNcDTdazWkKgGLRhwYfBSFCVsvr", "span[style*='qdbIwxnNkU']");
decrypt("HwSjBkqPuabFCNgvlXGiEDpZJURnfKoLATOyQImshtYdWMVrecxz", "span[style*='RwhlWIsHFJ']");
decrypt("qVGZydWjAotzwmuvXfrBbTRHLiDKpxanSQlechMsYgPJCEIFUONk", "span[style*='sYmBEyfbbl']");
decrypt("QphrHZeTVRUWlKmCsdXEGuwbaovSFIJDfnqOcYBixkzjLMAgyNtP", "span[style*='tvOtdvXBRe']");
decrypt("YuZqUFnHITMGlebCtQrKLSgfxJvDwsBiaWRkNdEXmOjVzohAycpP", "span[style*='uaSAzKKnqk']");
decrypt("neLPzpigAlGXRhDkQbSJyvIwVjYxfoOMcqsENrUWtmTFCZHaBduK", "span[style*='vzjDMAdYOl']");

decrypt("MxaoiDLZktbgBpfmuGqXdJwsSCOYryHVRUKlzNvAnTjIWchPQFeE", "span[style*='ejAeHMBymq']");
decrypt("vBIiyHArRYXlVhqdtZQxOzKjgPcwSEDaMsCUnbNpfoWeGukJTLFm", "span[style*='AQxnIsDumE']");
decrypt("FINtlAjGYqeXHKDuPdBhpsWvQnLSJmrbxkyzwZogcfRVOUTECaMi", "span[style*='iMNJeWnvUh']");
decrypt("yXUOpZCFJTvGrnoeuLMlgzdxjcSERPmfwKIDiNYVsWHtbBqQAahk", "span[style*='LGxJYysRIk']");
decrypt("ELzZxnXGphkCMRFmAuBfIyvgiwjDSNtlJqaHPWObsUQreVYTKcdo", "span[style*='NfhCRvCnno']");
decrypt("BZbgSrOAdKkspTNVaJEWIQtmxFzflnGcHLqDviUheYuMyPowCXjR", "span[style*='pQcWPzpaVl']");
decrypt("whxqtFgAkKVdZEpWzBsvSUNjLfIPuHabrCDRGXeQolyTOciJMYnm", "span[style*='TspgyfrGBi']");

decrypt("ltTWhQwUrJcBPAuvRjSskzKOVYgHZeyIdFfqMpoxXnEmLCGiNabD", "span[style*='alvgmnbkmf']");
decrypt("TLkrzWIdXhBpqmDytFvMJQAngUacfVbPHijlRYCusZoONKEGSexw", "span[style*='IrKdWsGRMO']");
decrypt("CRLUaqKEwPhAdFIYZDQNpxBnSisvjucGTzOgfekXJbmrWtoVyHlM", "span[style*='ISjDhNEHac']");
decrypt("cHMZtWYfaEipjXbRPLogAFSBDVrOmUNxIlkeCszTuwKhdJnGqQyv", "span[style*='QJMcnStxOB']");
decrypt("TsaIRfGZnyhKvYobSeUgOBmlXCAVcwHzpLDxduPtJFQNiWrMjkqE", "span[style*='qwZRlsggGD']");
decrypt("jweUWMzgtNpxCblFiGIOPRvBHoJXZDVmQnTLuYhdfrEcKakAsSqy", "span[style*='rnpCDEwkGW']");
decrypt("DwChjXeaLTrHMBxEzfsuPKmWcJqZbiASNlVRFpGgkQdUoyOvntYI", "span[style*='ukmIQftduw']");
decrypt("ZBnzlOeqoWJatxTLMNpDCYIFdfQvwbUEjGumHikrVXPKRcShsygA", "span[style*='VaIoHvGJtg']");
decrypt("AqlHphQCbUZgnYieWuwLzTvJMFxIPKtRmoarEskDVjGNcfXyBdOS", "span[style*='xGnoFXNBVC']");
decrypt("HqOPjeAgIRWtQFyaKBCVGNZrUXdopflwMYEivJsSTucDxnhbzmLk", "span[style*='yYdxlleKWe']");

decrypt("SwVuEnpXNaxfrihyQFIPOLmMYZUjlvRJeHodbDGATsBkztgcqWCK", "span[style*='cIUfMFFovl']");
decrypt("ZBnzlOeqoWJatxTLMNpDCYIFdfQvwbUEjGumHikrVXPKRcShsygA", "span[style*='cnEeriPySJ']");
decrypt("DwChjXeaLTrHMBxEzfsuPKmWcJqZbiASNlVRFpGgkQdUoyOvntYI", "span[style*='DFkGtSHboi']");
decrypt("eGzlEDIZUgQyYPBHRqitLSXTahMOdnuvAFcxkspjoNJCfwKbVmrW", "span[style*='DoWzakOILN']");
decrypt("mLPWMFVSlnDUzBxivJhoOwICZEpgAGqsyQfrjXabedkHNkTRYtuc", "span[style*='DPtCqulgjb']");
decrypt("hrGNJQxmbjuUDROFWpHsLcnBPIvkVYtAadeoCwqyEMizlTKgZXfS", "span[style*='dpUUjBTAqi']");
decrypt("kxWYbNJzIrCuoSHAeEBVTFQfaRyhMDwgmXdPZpOGUnLiKvtscjql", "span[style*='fPJhilrnny']");
decrypt("ViphqmcezIsEnaBKkUGoyQJxrufTYOLRFjwlXStDAHdWMPvbCNZg", "span[style*='fZMgpcOrAG']");
decrypt("AiHqunvkxlfdBZNgPwFCtMIYXOEVyLczSRsaKmGhJUeTbDpjoQrW", "span[style*='jfpBCKIPwR']");
decrypt("JznCuUZtTgKGAkvwBSOYLHsihaNEPpMVefWRoqlymbjcIXrdQDFx", "span[style*='mbyNtGXiVh']");
decrypt("yXUOpZCFJTvGrnoeuLMlgzdxjcSERPmfwKIDiNYVsWHTtbqQAahk", "span[style*='mGShNdJMaZ']");
decrypt("gXGiFupUyItQdSezsofMPVcqHLBROTmCNEYrZhaWDkKAlJbxvwjn", "span[style*='PYXuVrtBgv']");
decrypt("qVGZydWjAotzwmuvXfrBbTRHLiDKpxanSQlechMsYgPJCEIFUONk", "span[style*='rrJDvEJrWD']");
decrypt("xvlNyZqJuzshckbdajUWmEKGCrRPOwTHIBAFYLnpfeMSDXQVtgio", "span[style*='SBGcyxzNBL']");
decrypt("gjkChAdlBJYOVIxTXnisWLvmyEMtuGzpPaebFDcZoRHSwUrNfqKQ", "span[style*='shbWMmNRjw']");
decrypt("EdmCAkeowsNOfGJKbMgTitzIUjLxnrYQZXqcvuylWHDSphRBaFVP", "span[style*='SPGpJmyjJv']");
decrypt("JznCuUZtTgKGAkvwBSOYLHsihaNEPpMVefWRoqlymbjcIXrdQDFx", "span[style*='TFxnzfpNdH']");
decrypt("EmlhxnBkJVTwsuPQqvAcOaSyeXKDoztpYCNRFgMGrLIHiWfbUjdZ", "span[style*='TqFGPUefId']");
decrypt("iDZOLYCJEXRfQsucWoTIkqeFtNSaUlwvHMpnzPKdVGhjbAgBxmyr", "span[style*='VIauEWgwXz']");
decrypt("SBGwfKvctrjOmdyzXAYJWxhqReUDlaLiEFTNuIPZoHgbKsMpVQCn", "span[style*='VimmFshIRl']");
decrypt("RIquQNElTOWSUAmcJKBeYijVdgtDoPsCapXzxGfLhnbvwHMZrkyF", "span[style*='VTjbuHWYYu']");
decrypt("KFhayuLfBRAgqJvnjeSHwPMUQzEcrTpbkOZxVlYNiXstGoWImCDd", "span[style*='xgLZBJpJAw']");
decrypt("vDxtzobGrXESwLWypAkZOMBYQNsdPUTVcFhnHajgRmiKfeuCIJlq", "span[style*='yIukOyvQdF']");

decrypt("upTZVvjGaMwRBUXelqJACQfFkybrEnmoWcgHxYPztSshDOIdLiKN", "span[style*='EGNasdSKwx']");
decrypt("wGEnejTOVNDQxFqiHgbWZtLydJlcSouXBPKrYvzACkmpIRhMsfUa", "span[style*='enpobLqKJb']");
decrypt("jbsUhGHLVKtioYfAnrvTIBdpFOWgMExDRPyXNzeQawZulkSqmcCJ", "span[style*='hTIDISAgYt']");
decrypt("ltTWhQwUrJcBPAuvRjSskzKOVYgHZeyIdFfqMpoxXnEmLCGiNabD", "span[style*='LuRMsKgrDe']");
decrypt("ErZUfzIKaAPqYwLFCVdeOQJkSTHxuGlphobMgNcsXjinDWmByRtv", "span[style*='ousqfBCdIC']");
decrypt("ELzZxnXGphkCMRFmAuBfIyvgiwjDSNtlJqaHPWObsUQreVYTKcdo", "span[style*='TYaugVmfpC']");
decrypt("eCPpVmfshBHdcASJFquMKNLlYtnoGkZXQvUEgzWDOjwRbxiarTIy", "span[style*='vlvoUaBTIB']");
decrypt("qVGZydWjAotzwmuvXfrBbTRHLiDKpxanSQlechMsYgPJCEIFUONk", "span[style*='ZAcOyshiXU']");
decrypt("SBGwfKvctrjOmdyzXAYJWxhqReUDIaLiEFTNulPZoHgbksMpVQCn", "span[style*='GtIOlxSDNU']");
decrypt("ELzZxnXGphkCMRFmAuBfIyvgiwjDSNtlJqaHPWObsUQreVYTKcdo", "span[style*='ibVgYblugQ']");
decrypt("PwyUBVTYqAXxZMfEjrSeDazCkWoivHJbKltNdLOhupgImQscnFRG", "span[style*='lYmKMWwXpv']");
decrypt("MFbcZDXiNudarsGYTogEAUjBxyIvzkSHVRwKfQOWmhLqtneplPCJ", "span[style*='MVzzlGcGaj']");
decrypt("HqOPjeAgIRWtQFyaKBCVGNZrUXdopflwMYEivJsSTucDxnhbzmLk", "span[style*='tnEpWDMjDH']");
decrypt("uZCQtkAyRnJgxGVTbEXYwOBlWhvmKqoPrjdceHNDpUzfSFMaisIL", "span[style*='UfWsCMqhWl']");
decrypt("CRLUaqKEwPhAdFIYZDQNpxBnSisvjucGTzOgfekXJbmrWtoVyHlM", "span[style*='XhHYNwKOZL']");

decrypt("HFETmJAhKPnDOYjBwyxuXatiZRoVpMWvefcqzNkgQlsCdIGUbSrL", "span[style*='bGFbLoItHV']");
decrypt("iDZOLYCJEXRfQsucWoTlkqeFtNSaUIwvHMpnzPKdVGhjbAgBxmyr", "span[style*='dcYfvTmpfN']");
decrypt("whxqtFgAkKVdZEpWzBsvSUNjLfIPuHabrCDRGXeQolyTOciJMYnm", "span[style*='gxJRomHUOl']");
decrypt("HqOPjeAgIRWtQFyaKBCVGNZrUXdopflwMYEivJsSTucDxnhbzmLk", "span[style*='OsyTlCGBvi']");
decrypt("gjkChAdlBJYOVIxTXnisWLvmyEMtuGzPpaebFDcZoRHSwUrNfqKQ", "span[style*='qInBqzIvrL']");
decrypt("FGqNYQLTPUHecErxRuCjBkDXbMaKyfzOhJdipolAgWItZVsnmSvw", "span[style*='wZHhOEDAoM']");

decrypt("iDZOLYCJEXRfQsucWoTlkqeFtNSaUIwvHMpnzPKdVGhjbAgBxmyr", "span[style*='DLNVsHfPKZ']");
decrypt("whxqtFgAkKVdZEpWzBsvSUNjLfIPuHabrCFRGXeQolyTOciJMYnm", "span[style*='EUKKgQkEQq']");
decrypt("mLPWMFVSInDUzBxivJhoOwlCZEpgAGqsyQfrjXabedKHNkTRYtuc", "span[style*='qEEnuVQTre']");
decrypt("EmIhxnBkJVTwsuPQqvAcOaSyeXKDoztpYCNRFgMGrLlHiWfbUjdZ", "span[style*='YeyKNgMzwb']");

decrypt("sFUShVjieBHoQArygKWqTdPELkNIftXwcDZmpxuzbYJMnvORlCaG", "span[style*='EZcSoGEMiR']");
decrypt("HfdFkPlmYisAcWLtKICaXeguDRnphZTJwEQqOGVzjoSvMByNxbrU", "span[style*='hfDMmlRJqL']");
decrypt("SDhCdAvmspcaFJMxRNBriZnoHeWKYgbQwVtkPXTLEUjOfzGqyIlu", "span[style*='hSnXqfZUue']");
decrypt("RWOVtgzYjNfXMPQqscdZKwrLlFBCevhHSAEDIpnoGTukibyxamJU", "span[style*='okgSzSSzQi']");
decrypt("eDCzyBhMrKZJnNadoxOLtmiIvHTcPbSRYlfqukUgAGXspwVQFEWj", "span[style*='ywmBAihBbm']");

decrypt("qVGZydWjAotzwmuvXfrBbTRHLiDKpxanSQlechMsYgPJCEIFUONk", "span[style*='cEywmbTqDB']");
decrypt("gjkChAdlBJYOVIxTXnisWLvmyEMtuGzPpaebFDcZoRHSwUrNfqKQ", "span[style*='ZufvcqapRI']");
decrypt("XBPQJaTEScurUgntLhipeROoKksGzAYCWMjqFdZlwmbDHvyINVfx", "span[style*='YZhIyDIBCR']");
decrypt("eGzlEDIZUgQyYPBHRqitLSXTahMOdnuvAFcxkspjoNJCfwKbVmrW", "span[style*='YvPJocLSiJ']");
decrypt("gXgiFupUyltQdSezsofMPVcqHLBROTmCNEYrZhaWDkKAIJbxvwjn", "span[style*='XAtFBRYSPv']");
decrypt("ErZUfzIKaAPqYwLFCVdeOQJkSTHxuGlphobMgNcsXjinDWmByRtv", "span[style*='uttlRpyQqm']");
decrypt("eDCzyBhMrKZJnNadoxOLtmiIvHTcPbSRYlfqukUgAGXspwVQFEWj", "span[style*='TPgaxZlNUF']");
decrypt("wZkprtAulnqVFOfcvSPaDTMYdxymNQsGUILJWBiebxhEoCgjRKHz", "span[style*='TNrFpJYfpb']");
decrypt("RWOVtgzYjNfXMPQqscdZKwrLlFBCevhHSAEDIpnoGTukibyxamJU", "span[style*='RNjJeVoFRX']");
decrypt("HfdFkPlmYisAcWLtKICaXeguDRnphZTJwEQqOGVzjoSvMByNxbrU", "span[style*='NRKdGsMXqz']");
decrypt("jweUWMzgtNpxCblFiGIOPRvBHoJXZDVmQnTLuYhdfrEcKakAsSqy", "span[style*='MCbUcGvgNd']");
decrypt("VROtYexfAGoarQSWZcuCypvNMljiIUbqHKmkhXgPdnTFwJEDBLzs", "span[style*='KsLnrlSDmU']");
decrypt("LAnBhRjcwgZbvlCrNmQTqKXyFDPdJVEGzaWYIikSoetHUfxsuMpO", "span[style*='eWWvlItOgw']");
decrypt("qJPDVylcKsSLCNtnfbmRwdaxHEprjIoiBYhGvOeuTWgzFQUZAkXM", "span[style*='EqBQsyjAkF']");

decrypt("KFhayuLfBRAgqJvnjeSHwPMUQzEcrTpbkOZxVlYNiXstGoWImCDd", "span[style*='IIjiYtvvof']");
decrypt("jweUWMzgtNpxCblFiGIOPRvBHoJXZDVmQnTLuYhdfrEcKakAsSqy", "span[style*='kCpLayiTNj']");
decrypt("eCPpVmfshBHdcASJFquMKNLlYtnoGkZXQvUEgzWDOjwRbxiarTIy", "span[style*='kzkLbBUFeR']");
decrypt("yXUOpZCFJTvGrnoeuLMlgzdxjcSERPmfwKIDiNYVsWHtbBqQAahk", "span[style*='SpjgLmKunX']");
decrypt("qBCDbvnRtgEZPYaNmJGUIcdsSHFMQKhyzxpWejTVilXfowOuAkrL", "span[style*='SwzfWWErOQ']");
decrypt("FGqNYQLTPUHecErxRuCjBkDXbMaKyfzOhJdipolAgWItZVsnmSvw", "span[style*='TEewvuhkhN']");
decrypt("YxklSNaconDsutOixICrJZwHeAyUEPhQBpFdTbjVmfRwqLvgXGKM", "span[style*='OPKyjLATvR']");
decrypt("uZCQtkAyRnJgxGVTbEXYwOBlWhvmKqoPrjdceHNDpUzfSFMaisIL", "span[style*='WSBGAAnPFU']");
decrypt("LAnBhRjcwgZbvlCrNmQTqKXyFDPdJVEGzaWYIikSoetHUfxsuMpO", "span[style*='CYTrrEwFwT']");

decrypt("RlquQNEITOWSUAmcJKBeYijVdgtDosPCapXzxGfLhnbvwHMZrkyF", "span[style*='ClkMkHDYMQ']");
decrypt("RWOVtgzYjNfXMPQqscdZKwrLlfBCevhHSAEDIpnoGTukibyxamJU", "span[style*='cZCOfOioXw']");
decrypt("bEHGfOrjzDQIWKCBxXhvetgdNnJTFVuAyPscZqRSwoalmpMYiUkL", "span[style*='DRdqobfMAp']");
decrypt("ViphqmcezIsEnaBKkUGoyQJxrufTYOLRFjwlXStDAHdWMPvbCNZg", "span[style*='JbcxFeKwNr']");
decrypt("qVGZydWjAotzwmuvXfrBbTRHLiDKpxanSQlechMsYgPJCEIFUONk", "span[style*='OaDSpGkfXl']");
decrypt("SDhCdAvmspcaFJMxRNBriZnoHeWKYgbQwVtkPXTLEUjOfzGqyIlu", "span[style*='pbWEDoTvXK']");
decrypt("XiFDICeMQtqEvboVjuhdcOgySaNzwBJGKWrPfTAmnsRHUxYLZkpl", "span[style*='RvmcoUMLSJ']");
decrypt("DwChjXeaLTrHMBxEzfsuPKmWcjqZbiASNlVRFpGgkQdUoyOvntYI", "span[style*='zTMxNuHtWW']");
decrypt("wGEnejTOVNDQxFqiHgbWZtLydjlcSouXBPKrYvzACkmplRhMsfUa", "span[style*='CsOenNavOD']");
decrypt("xvlNyZqJuzshckbdajUWmEKGCrRPOwTHIBAFYLnpfeMSDXQVtgio", "span[style*='hPEZazwLbq']");
decrypt("iKhDSORsAbqBtGNYpecfHQEwkIxJlWCmTLjFdzrPXuvVonMygUZa", "span[style*='iKIlSZozCU']");
decrypt("TqAocipRUanGQmJlSxWZMgHhCrIPkfVFKbEwjXLdBeNsYuOzDtyv", "span[style*='LEEaEUACWi']");
decrypt("JznCuUZtTgKGAkvwBSOYLHsihaNEPpMVefWRoqlymbjcIXrdQDFx", "span[style*='QTkGMKMNis']");
decrypt("dTKbCMwpkGWJrjOUiFVesPoXRfQSmuvqglEyDBLnzIYHAZcaxthN", "span[style*='yljVjwreth']");
decrypt("zBnNYbFxfkPLZXrViQtEMSRsepyvdwJgDCmWcauGqToHKhIjUAlO", "span[style*='bxYZYWAkss']");
decrypt("SBGwfKvctrjOmdyzXAYJWxhqReUDIaLiEFTNulPZoHgbksMpVQCn", "span[style*='jcjxdWyznV']");
decrypt("ZhBxqGpCuKXjcVQebPlmHgzsdvritDUSWaYwJnIyLEMRONoAkfFT", "span[style*='rrCINBtEss']");
decrypt("mLPWMFVSInDUzBxivJhoOwlCZEpgAGqsyQfrjXabedKHNkTRYtuc", "span[style*='TLMhrEfbrV']");
decrypt("qJPDVylcKsSLCNtnfbmRwdaxHEprjIoiBYhGvOeuTWgzFQUZAkXM", "span[style*='fmMHCjInsh']");
decrypt("TsaIRfGZnyhKvYobSeUgOBmlXCAVcwHzpLDxduPtJFQNiWrMjkqE", "span[style*='hRPtnhGSXO']");
decrypt("xPUhYNEyqXpjClKvZLJwFHWukfRnIdcVODAgrzQMtaBimbGoeTsS", "span[style*='PVOpoRCMSr']");
decrypt("EmIhxnBkJVTwsuPQqvAcOaSyeXKDoztpYCNRFgMGrLlHiWfbUjdZ", "span[style*='vOVAzBClRx']");
decrypt("wGEnejTOVNDQxFqiHgbWZtLydJlcSouXBPKrYvzACkmpIRhMsfUa", "span[style*='wCKcmmbmAr']");
decrypt("PwzuNiaQBycMxhZfelTdLkegHRUJrjWKXVYmADoqntOCGsSIpFbv", "span[style*='yONEBiiCRm']");
decrypt("HwSjBkqPuabFCNgvlXGiEDpZJURnfKoLATOyQImshtYdWMVrecxz", "span[style*='fudqwliLjE']");
decrypt("ZCmagAnbByNiEIvutJqOpLxrSQfhzwjDUVRlmFKGXTWPHoYcksed", "span[style*='iqzLxBfCpY']");
decrypt("SBGwfKvctrjOmdyzXAYJWxhqReUDIaLiEFTNulPZoHgbksMpVQCn", "span[style*='RiPNQnwvFF']");
decrypt("SwVuEnpXNaxfrihyQFIPOLmMYZUjlvRJeHodbDGATsBkztgcqWCK", "span[style*='uGDnnlyNIV']");

decrypt("inDFJlbUacwvHOIdxushAoLVMZCSeYjPXkzNtQRfyqTrpWGgmEBK", "span[style*='BEvDERdjQu']");
decrypt("aDtPrWLUgMHlGbkvsQCeoTNAxYjzXcuKEyqIfJRdBOFmZwiSpnVh", "span[style*='CkqVsbqcOM']");
decrypt("DwChjXeaLTrHMBxEzfsuPKmWcJqZbiASNlVRFpGgkQdUoyOvntYI", "span[style*='kMwjzUtVIh']");
decrypt("yXUOpZCFJTvGrnoeuLMlgzdxjcSERPmfwKIDiNYVsWHtbBqQAahk", "span[style*='ULMyPOXwLI']");
decrypt("upTZVvjGaMwRBUXelqJACQfFkybrEnmoWcgHxYPztSshDOIdLiKN", "span[style*='xTaHduEiQz']");
decrypt("xvlNyZqJuzshckbdajUWmEKGCrRPOwTHIBAFYLnpfeMSDXQVtgio", "span[style*='yuzXNEnNUB']");
decrypt("wGEnejTOVNDQxFqiHgbWZtLydJlcSouXBPKrYvzACkmpIRhMsfUa", "span[style*='ZsVuUIEfes']");

decrypt("eCPpVmfshBHdcASJFquMKNLlYtnoGkZXQvUEgzWDOjwRbxiarTIy", "span[style*='idUUsjsnjQ']");
decrypt("XBPQJaTEScurUgntLhipeROoKksGzAYCWMjqFdZlwmbDHvyINVfx", "span[style*='jTyUTrgCnu']");
decrypt("eDCzyBhMrKZJnNadoxOLtmiIvHTcPbSRYlfqukUgAGXspwVQFEWj", "span[style*='MjsyeDdbOd']");
decrypt("dTKbCMwpkGWJrjOUiFVesPoXRfQSmuvqglEyDBLnZIYHAZcaxthN", "span[style*='PAprchfRCk']");
decrypt("PwyUBVTYqAXxZMfEjrSeDazCkWoivHJbKltNdLOhupgImQscnFRG", "span[style*='ruHGymMIWT']");
decrypt("ZhBxqGpCuKXjcVQebPlmHgzsdvritDUSWaYwJnIyLEMRONoAkfFT", "span[style*='TBYjEHAIQP']");
decrypt("iKhDSORsAbqBtGNYpecfHQEwkIxJlWCmTLjFdzrPXuvVonMygUZa", "span[style*='ymfNBNYdQt']");
decrypt("XUQvNfzGwdOAcRMIWhYbTlBFSxojpnZDPCHVktKEJmuqgsyariLe", "span[style*='yVAUTXmqcl']");

decrypt("BZbgSrOAdKkspTNVaJEWIQtmxFzflnGcHLqDviUheYuMyPowCXjR", "span[style*='AXDurpNEAn']");
decrypt("qJPDVylcKsSLCNtnfbmRwdaxHEprjIoiBYhGvOeuTWgzFQUZAkXM", "span[style*='bnmyfUhmhQ']");
decrypt("iDZOLYCJEXRfQsucWoTlkqeFtNSaUIwvHMpnzPKdVGhjbAgBxmyr", "span[style*='BuFflQVTFp']");
decrypt("mLPWMFVSInDUzBxivJhoOwlCZEpgAGqsyQfrjXabedKHNkTRYtuc", "span[style*='cXJZebSxhr']");
decrypt("RWOVtgzYjNfXMPQqscdZKwrLlFBCevhHSAEDIpnoGTukibyxamJU", "span[style*='dopeZmmoAT']");
decrypt("qBCDbvnRtgEZPYaNmJGUIcdsSHFMQKhyzxpWejTVilXfowOuAkrL", "span[style*='IbkwxZsVNj']");
decrypt("QphrHZeTVRUWlKmCsdXEGuwbaovSFIJDfnqOcYBixkzjLMAgyNtP", "span[style*='nvhhlNeUyR']");
decrypt("wZkprtAulnqVFOfcvSPaDTMYdXymNQsGUILJWBiebxhEoCgjRKHz", "span[style*='RqdoohxIiT']");
decrypt("hrGNJQxmbjuUDROFWpHsLcnBPIvkVYtAadeoCwqyEMizlTKgZXfS", "span[style*='UTJpduJgZj']");

decrypt("lMiDtBgoaKXzIhdLfGjQScPbTEHNemZkCxuRFUqvnJwsVyOrWYAp", "span[style*='nEcuCEOIcI']");
decrypt("QphrHZeTVRUWlKmCsdXEGuwbaovSFIJDfnqOcYBixkzjLMAgyNtP", "span[style*='NimOjJxoWP']");
decrypt("EmIhxnBkJVTwsuPQqvAcOaSyeXKDoztpYCNRFgMGrLlHiWfbUjdZ", "span[style*='sGdXsEBpGR']");
decrypt("SDhCdAvmspcaFJMxRNBriZnoHeWKYgbQwVtkPXTLEUjOfzGqyIlu", "span[style*='SodstvjFyd']");
decrypt("RlquQNEITOWSUAmcJKBeYijVdgtDosPCapXzxGfLhnbvwHMZrkyF", "span[style*='WPQSZdUIYt']");
decrypt("iKhDSORsAbqBtGNYpecfHQEwkIxJlWCmTLjFdzrPXuvVonMygUZa", "span[style*='XTawgQGAWW']");

decrypt("jbsUhGHLVKtioYfAnrvTIBdpFOWgMExDRPyXNzeQawZulkSqmcCJ", "span[style*='aAffVnrzXD']");
decrypt("NszhwBZXSOtiQdJRCrDgjUHaWEAQpbyklePFTuVcomGxfYvILKMn", "span[style*='GymGrGlBco']");
decrypt("FGqNYQLTPUHecErxRuCjBkDXbMaKyfzOhJdipolAgWItZVsnmSvw", "span[style*='INwLyngWNq']");
decrypt("whxqtFgAkKVdZEpWzBsvSUNjLfIPuHabrCDRGXeQolyTOciJMYnm", "span[style*='OeNeEqGiZq']");
decrypt("gXGiFupUyltQdSezsofMPVcqHLBROTmCNEYrZhaWDkKAIJbxvwjn", "span[style*='UJciWYaxPm']");
decrypt("JznCuUZtTgKGAkvwBSOYLHsihaNEPpMVefWRoqlymbjcIXrdQDFx", "span[style*='XfuDxbCbRe']");
decrypt("xoymMIDzBNkQVEnXGOaiThpeAjWUcZvPlJLCfwtKSbsYrdRqugFH", "span[style*='XtdctAnsye']");

decrypt("XiFDICeMQtqEvboVjuhdcOgySaNzwBJGKWrPfTAmnsRHUxyLZkpl", "span[style*='cgMzUELiER']");
decrypt("ltTWhQwUrJcBPAuvRjSskzKOVYgHZeyIdFfqMpoxXnEmLCGinabD", "span[style*='hnAbElQJmu']");
decrypt("eCPpVmfshBHdcASJFquMKNLlYtnoGkZXQvUEgzWDOjwRbxiarTIy", "span[style*='kdmfiifpcg']");
decrypt("HqOpjeAgIRWtQFyaKBCVGnzrUXdopflwMYEivJsSTucDxnhbzmLk", "span[style*='ktUZRsMYmx']");
decrypt("ZCmagAnbByNiEIvutJqOpLxrSQfhzwjDUVRlMFKGXTWPHoYcksed", "span[style*='LjxaYmuMri']");
decrypt("LAnBhRjcwgZbvlCrNmQTqKXyFDPdJVEGzaWYIikSoetHUfxsuMpO", "span[style*='LvFfZGyoPM']");
decrypt("SDhCdAvmspcaFJMxRNBriZnoHeWKYgbQwVtkPXTLEUjOfzGqyIlu", "span[style*='pBpZfDqrbN']");
decrypt("xvlNyZqJuzshckbdajUWmEKGCrRPOwTHIBAFYLnpfeMSDXQVtgio", "span[style*='QEiuRLGNge']");
decrypt("upTZVvjGaMwRBUXelqJACQfFkybrEnmoWcgHxYPztSshDOIdLiKN", "span[style*='UmMnXyDEkG']");
decrypt("cqaYjtiIAXehDVgUGCBfPsTJNELzZwyHnWRSlMudokFpQvmKrObx", "span[style*='YELcTsUnHt']");
decrypt("neLPzpigAlGXRhDkQbSJyvIwVjYxfoOMcqsENrUWtmTFCZHaBduK", "span[style*='ZgzGrgdcsm']");
decrypt("eCPpVmfshBHdcASJFquMKNLlYtnoGkZXQvUEgzWDOjwRbxiarTIy", "span[style*='zxuIiBdkVF']");

decrypt("XBPQJaTEScurUgntLhipeROoKksGzAYCWMjqFdZlwmbDHvyINVfx", "span[style*='CLlZAgCKRv']");
decrypt("ZCmagAnbByNiEIvutJqOpLxrSQfhzwjDUVRlMFKGXTWPHoYcksed", "span[style*='FfJfnFqLkp']");
decrypt("iDZOLYCJEXRfQsucWoTlkqeFtNSaUIwvHMpnzPKdVGhjbAgBxmyr", "span[style*='GUTvalplnN']");
decrypt("qVGZydWjAotzwmuvXfrBbTRHLiDKpxanSQlechMsYgPJCEIFUONk", "span[style*='GZbsNyqWgR']");
decrypt("LeGblOkQZRWdVHtXJDBPKCvhANjwEIcyrYaMmFgTsoUfSpzxqnui", "span[style*='HqIbiQqBKV']");
decrypt("FGqNYQLTPUHecErxRuCjBkDXbMaKyfzOhJdipolAgWItZVsnmSvw", "span[style*='jbmxpcXePY']");
decrypt("eOqaECAymwKpRhdcvWNLTxUHgnVXfSoMjPJkZQbDtBFGizYrIlsu", "span[style*='lRSTkyFwzQ']");
decrypt("xvlNyZqJuzshckbdajUWmEKGCrRPOwTHIBAFYLnpfeMSDXQVtgio", "span[style*='VREJPvHIhT']");
decrypt("ViphqmcezIsEnaBKkUGoyQJxrufTYOLRFjwlXStDAHdWMPvbCNZg", "span[style*='YNteLJSWHb']");
decrypt("eCPpVmfshBHdcASJFquMKNLlYtnoGkZXQvUEgzWDOjwRbxiarTIy", "span[style*='zxuIiBdkVF']");

decrypt("LzRsNxDJpbYSdGhcXuCgoQnFmrHEiZjyMtOfIKPATvwQBVakleWU", "span[style*='cUVFPbPrTZ']");
decrypt("wGEnejTOVNDQxFqiHgbWZtLydJlcSouXBPKrYvzACkmpIRhmsfUa", "span[style*='gMkUOsaBOU']");
decrypt("cHMZtWYfaEipjXbRPLogAFSBDVrOmUNxIlkeCszTuwKhdJnGqQyv", "span[style*='MVCqYEBiyQ']");
decrypt("vDxtzobGrXESwLWypAkZOMBYQNsdPUTVcFhnHajgRmiKfeuCIJlq", "span[style*='nwTsJTMnaR']");
decrypt("dTKbCMwpkGWJrjOUiFVesPoXRfQSmuvqglEyDBLnZIYHAZcaxthN", "span[style*='OKbPxHXGoT']");
decrypt("xBWHdOJEbXlAPhqLgtNeSoysaKGvcQIFnZrVMUuCkpDmRzifTwYj", "span[style*='yVcOROnSAQ']");

decrypt("gXGiFupUyltQdSezsofMPVcqHLBROTmCNEYrZhaWDkKAIJbxvwjn", "span[style*='aAHjYlagVK']");
decrypt("jweUWMzgtNpxCblFiGIOPRvBHoJXZDVmQnTLuYhdfrEcKakAsSqy", "span[style*='aDLhCJJwWb']");
decrypt("PwzuNiaQBycMxhZfElTdLkegHRUJrjWKXVYmADoqntOCGsSIpFbv", "span[style*='eaVeowUktJ']");
decrypt("DwChjXeaLTrHMBxEzfsuPKmWcJqZbiASNlVRFpGgkQdUoyOvntYI", "span[style*='hPdVEmsxaL']");
decrypt("TsalRfGZnyhKvYobSeUgOBmlXCAVcwHzpLDxduPtJFQNiWrMjkqE", "span[style*='RWPDxQdEmi']");
decrypt("ZCmagAnbByNiEIvutJqOpLxrSQfhzwjDUVRlMFKGXTWPHoYcksed", "span[style*='TFmwSYxkxE']");
decrypt("qJPDVylcKsSLCNtnfbmRwdaxHEprjIoiBYhGvOeuTWgzFQUZAkxM", "span[style*='TNLOCcqDdL']");
decrypt("HFETmJAhKPnDOYjBwyxuXatiZRoVpMWvefcqzNkgQlsCdIGUbSrL", "span[style*='UFaEWcmhtS']");
decrypt("bEHGfOrjzDQIWKCBxXhvetgdNnJTFVuAyPscZqRSwoalmpMYiUkL", "span[style*='XQCWbfsXwk']");

decrypt("neLPzpigAlGXRhDkQbSJyvIwVjYxfoOMcqsENrUWtmTFCZHaBduK", "span[style*='dEjBpbdjEF']");
decrypt("inDFJlbUacwvHOIdxushAoLVMZCSeYjPXkzNtQRfyqTrpWGgmEBK", "span[style*='DREuxTWEyQ']");
decrypt("ERzndSqFrxuDMNtkVyOYfeTjcIJPaHwhovGKCgQZbWLAmBpsXiUl", "span[style*='gNRvwnIbDT']");
decrypt("HFETmJAhKPnDOYjBwyxuXatiZRoVpMWvefcqzNkgQlsCdIGUbSrL", "span[style*='JRrIUIjUxf']");
decrypt("pbqUHJZxnMOjQtAuEyoemXIilPNcDTdazWkKgGLRhwYfBSFCVsvr", "span[style*='lDIuYJGBGW']");
decrypt("eGzlEDIZUgQyYPBHRqitLSXTahMOdnuvAFcxkspjoNJCfwKbVmrW", "span[style*='mJgVUXoyyW']");
decrypt("agNUKtWLPAiYezZrJpCbQuqTGMcVxHnjlSfvRimkswOEdDyBXhoF", "span[style*='nRlHTvKGex']");
decrypt("ZBnzlOeqoWJatxTLMNpDCYIFdfQvwbUEjGumHikrVXPKRcShsygA", "span[style*='QTlYZxsqHh']");
decrypt("eDCzyBhMrKZJnNadoxOLtmiIvHTcPbSRYlfqukUgAGXspwVQFEWj", "span[style*='rdwJtIdWoq']");
decrypt("SBGwfKvctrjOmdyzXAYJWxhqReUDIaliEFTNulPZoHgbksMpVQCn", "span[style*='stnOcsEyqz']");
decrypt("eGzlEDIZUgQyYPBHRqitLSXTahMOdnuvAFcxkspjoNJCfwKbVmrW", "span[style*='ulGYXiMKSh']");
decrypt("iKhDSORsAbqBtGNYpecfHQEwkIxJlWCmTLjFdzrPXuvVonMygUZa", "span[style*='xMwznzYahG']");
decrypt("bEHGfOrjzDQIWKCBxXhvetgdNnJTFVuAyPscZqRSwoaImpMYiUkL", "span[style*='XQCWbfsXwk']");
decrypt("ikvXhpVftrOcGCBaZxgFSwmWEjbAoLePKnTqUDMIyJdRlQuzsYNH", "span[style*='zApfmxSrlQ']");

decrypt("iDZOLYCJEXRfQsucWoTlkqeFtNSaUIwvHMpnzPKdVGhjbAgBxmyr", "span[style*='EfeKubnHyj']");
decrypt("PwzuNiaQBycMxhZfElTdLkegHRUJrjWKXVYmADoqntOCGsSIpFbv", "span[style*='juXpRcvrRA']");
decrypt("vBIiyHArRyXlVhqdtZQxOzKjgPcwSEDaMsCUnbNpfoWeGukJTLFm", "span[style*='QZpZjNQUaE']");
decrypt("ZBnzlOeqoWJatxTLMNpDCYIFdfQvwbUEjGumHikrVXPKRcShsygA", "span[style*='ycjIoumbyn']");

decrypt("CmWkeQxEgfFYuAXHUwpVRGiMvJbBdojPalhrsSZDqLyOKtTNIcnz", "span[style*='CmVofOoVTU']");
decrypt("aDtPrWLUgMHlGbkvsQCeoTNAxYjxXcuKEyqIfJRdBOFmZwiSpnVh", "span[style*='fMhMAzkigU']");
decrypt("YzklSNaconDsutOixICrJZwHeAyUEPhQBpFdTbjVmfRWqLvgXGKM", "span[style*='gVBgxmsqDB']");
decrypt("JznCuUZtTgKGAkvwBSOYLHsihaNEPpMVefWRoqlymbjcIXrdQDFx", "span[style*='RJBeCqserb']");

decrypt("TsaIRfGZnYhKvYobSeUgOBmlXCAVcwHzpLDxduPtJFQNiWrMjkqE", "span[style*='aPqUDYiXqg']");
decrypt("RWOVtgzYjNFXMPQqscdZKwrLlFBCevhHSAEDIpnoGTukibyxamJU", "span[style*='AWggbZhLlE']");
decrypt("ViphqmcezIsEnaBKkUGoyQJxrufTYOLRFjwlXStDAHdWMPvbCNZg", "span[style*='DQpClQAktu']");
decrypt("TqAocipRUanGQmJlSxWZMgHhCrIPkfVFKbEwjXLdBeNsYuOzDtyv", "span[style*='FocLiWvPDo']");
decrypt("MxaoiDLZktbgBpfmuGqXdJwsSCOYryHVRUKlzNvAnTjIWchPQFeE", "span[style*='iKBKfmoKdX']");
decrypt("EdmCAkeowsNOfGJKbMgTitzIUjLxnrYQZXqcvuylWHDSphRBaFVP", "span[style*='KcbPVmSCiG']");
decrypt("eOqaECAymwKprhdcvWNLTxUHgnVXfSoMjPJkzQbDtBFGizYrIlsu", "span[style*='kesmVWzqvb']");
decrypt("MLTjxanXPEUrhyKpRfdNAzebCkWlovqQBgDSZuGciHmswYFOIVJt", "span[style*='KmrRzqfENu']");
decrypt("UaAfIxLRXihODSjcBEFJeZuGTPlWnVQzcyqrHNkmoMKCgbtsdYwp", "span[style*='ptAOsdXOuv']");

decrypt("NszhwBZXSOtiqdJRCrDgjUHaWEAQpbyklePFTuVcomGxfYvILKMn", "span[style*='EtnzGUAeMk']");
decrypt("MFbcZDXiNudarsGYTogEAUjBxyIvzkSHVRwKfQOWmhLqtneplPCJ", "span[style*='HQZJawIrVm']");
decrypt("XBPQJaTEScurUgntLhipeROoKksGzAYCWMjqFdZlwmbDHvyINVfx", "span[style*='KxQLEwSkjY']");
decrypt("xvlNyZqJuzshckbdajUWmEKGCrRPOwTHIBAFYLnpfeMSDXQVtgio", "span[style*='wIQFfbwdmB']");

decrypt("SwVuEnpXNaxfrihyQFIPOLmMYZUjlvRJeHodbDGATsBkztgcqWCK", "span[style*='bSRoIHeQjO']");
decrypt("icHNSUwesAGBaCnZYgQVkdjbEWIPXfpDyJtForhvMzuKTqRIxOLm", "span[style*='iURpuOalyX']");
decrypt("IMiDtBgoaKXzlhdLfGjQScPbTEHNemZkCxuRFUqvnJwsVyOrWYAp", "span[style*='jnJSUORXzg']");
decrypt("qVGZydWjAotzwmuvXfrBbTRHLiDkpxanSQlechMsYgPJCEIFUONk", "span[style*='LeTyvdOOtt']");
decrypt("XiFDICeMQtqEvboVjuhdcOgySaNzwBJGKWrPfTAmnsRHUxYLZkpl", "span[style*='lJeUnPtvWU']");
decrypt("PwyUBVTYqAXxZMfEjrSeDazCkWoivHJbKltNdLOhupgImQscnFRG", "span[style*='lWWzVtbgko']");
decrypt("jbsUhGHLVKtioYfAnrvTIBdpFOWgMExDRPyXNzeQawZulkSqmcCJ", "span[style*='NRKygqPTMI']");
decrypt("inDFJlbUacwvHOIdxushAoLVMZCSeYjPXkzNtQRfyqTrpWGgmEBK", "span[style*='PjOsCYNpCi']");

decrypt("uZCQtkAyRnJgxGVTbEXYwOBlWhvmKqoPrjdceHNDpUzfSFMaisIL", "span[style*='BuKktLFsBD']");
decrypt("TqAocipRUanGQmJlSxWZMgHhCrIPkfVFKbEwjXLdBeNsYuOzDtyv", "span[style*='duAUOdvNnz']");
decrypt("CmWkeQxEgfFYuAXHUwpVRGiMvJbBdojPalhrsSZDqLyOKtTNIcnz", "span[style*='DyNyTbCjLS']");
decrypt("RWOVtgzYjNfXMPQqscdZKwrLlFBCevhHSAEDIpnoGTukibyxamJU", "span[style*='ecUgNtqmOX']");
decrypt("FINtlAjGYqeXHKDuPdBhpsWvQnLSJmrbxkyzwZogcfRVOUTECaMi", "span[style*='GOVgkvmwLW']");
decrypt("HFETmJAhKPnDOYjBwyxuXatiZRoVpMWvefcqzNkgQlsCdIGUbSrL", "span[style*='hSOkEzrUdy']");
decrypt("cHMZtWYfaEipjXbRPLogAFSBDVrOmUNxIlkeCszTuwKhdJnGqQyv", "span[style*='KFXtkDrlcW']");
decrypt("SBGwfKvctrjOmdyzXAYJWxhqReUDIaLiEFTNulPZoHgbksMpVQCn", "span[style*='mehEJLSwzT']");
decrypt("eDCzyBhMrKZJnNadoxOLtmiIvHTcPbSRYlfqukUgAGXspwVQFEWj", "span[style*='MtDPRDpOIA']");
decrypt("VStMAakjpfRQFUGWeqrguCdblcvYIDHNKzywBxKTnsZmPJiXEohO", "span[style*='nLGwZrEHfd']");
decrypt("qVGZydWjAotzwmuvXfrBbTRHLiDkpxanSQlechMsYgPJCEIFUONk", "span[style*='NsWENITftu']");
decrypt("SwVuEnpXNaxfrihyQFIPOLmMYZUjlvRJeHodbDGATsBkztgcqWCK", "span[style*='NySEndUEbl']");
decrypt("vBIiyHArRYXlVhqdtZQxOzKjgPcwSEDaMsCUnbNpfoWeGukJTLFm", "span[style*='oUgtZTGozh']");
decrypt("eGzlEDIZUgQyYPBHRqitLSXTahMOdnuvAFcxkspjoNJCfwKbVmrW", "span[style*='pawlHhwceR']");
decrypt("XiFDICeMQtqEvboVjuhdcOgySaNzwBJGKWrPfTAmnsRHUxYLZkpl", "span[style*='PMpvaSkHHz']");
decrypt("ltTWhQwUrJcBPAuvRjSskzKOVYgHZeyIdFfqMpoxXnEmLCGiNabD", "span[style*='qilPkOEdXS']");
decrypt("SwVuEnpXNaxfrihyQFIPOLmMYZUjlvRJeHodbDGATsBkztgcqWCK", "span[style*='sgZOXjHoNM']");
decrypt("PwzuNiaQBycMxhZfElTdLkegHRUJrjWKXVYmADoqntOCGsSIpFbv", "span[style*='sqwHKxlHQE']");
decrypt("CRLUaqKEwPhAdFIYZDQNpxBnSisvjucGTzOgfekXJbmrWtoVyHlM", "span[style*='sZNFisYMcn']");
decrypt("XUQvNfzGwdOAcRMIWhYbTlBFSxojpnZDPCHVktKEJmuqgsyariLe", "span[style*='vpfPPnlQvy']");

decrypt("qVTPNEAHbykpxiYtlWdOzUGnsMcZXBQuSaRKICJwgFLDefrvhmjo", "span[style*='EqPbCKLsmM']");
decrypt("EmIhxnBkJVTwsuPQqvAcOaSyeXKDoztpYCNRFgMGrLlHiWfbUjdZ", "span[style*='OXIIxFsEnm']");
decrypt("XUQvNfzGwdOAcRMIWhYbTlBFSxojpnZDPCHVktKEJmuqgsyariLe", "span[style*='vwOBulTBEp']");
decrypt("UaAfIxLRXihODSjvBEFJeZuGTPlWnVQzcyqrHNkmoMKCgbtsdYwp", "span[style*='XcosHpGJmq']");
decrypt("neLPzpigAlGXRhDkQbSJyvIwVjYxfoOMcqsENrUWtmTFCZHaBduK", "span[style*='FvGvkqwhRk']");
decrypt("WmydfBRPVIODTuxMEtYFqeQSzcjnKsXwapCkoUJZAvlGhLiNgbHr", "span[style*='LYRHSwklhH']");
decrypt("SwVuEnpXNaxfrihyQFIPOLmMYZUjlvRJeHodbDGATsBkztgcqWCK", "span[style*='mpXRnyoxQV']");
decrypt("pbqUHJZxnMOjQtAuEyoemXIilPNcDTdazWkKgGLRhwYfBSFCVsvr", "span[style*='RmjsbWbWXC']");
decrypt("ELzZxnXGphkCMRFmAuBfIyvgiwjDSNtlJqaHPWObsUQreVYTKcdo", "span[style*='uMRmspnMBt']");

decrypt("jbsUhGHLVKtioYfAnrvTIBdpFOWgMExDRPyXNzeQawZulkSqmcCJ", "span[style*='BxebgogZoh']");
decrypt("bEHGfOrjzDQIWKCBxXhvetgdNnJTFVuAyPscZqRSwoalmpMYiUkL", "span[style*='QYxGIFNaLm']");
decrypt("neLPzpigAlGXRhDkQbSJyvIwVjYxfoOMcqsENrUWtmTFCZHaBduK", "span[style*='xWtcTuvAgk']");
decrypt("qJPDVylcKsSLCNtnfbmRwdaxHEprjIoiBYhGvOeuTWgzFQUZAkXM", "span[style*='yjcHUCtYdl']");

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
