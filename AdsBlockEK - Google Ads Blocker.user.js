// ==UserScript==
// @name         AdsBlockEK - Google Ads Blocker
// @namespace    https://github.com/emrekayik/
// @version      1.0
// @description  Google'da arama yaptığınızda çıkan reklamları gizleyin.
// @author       Emre Kayık
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var tawElements = document.querySelectorAll("[id='taw']");
    for(var i=0; i<tawElements.length; i++){
        tawElements[i].style.display = "none";
    }
})();