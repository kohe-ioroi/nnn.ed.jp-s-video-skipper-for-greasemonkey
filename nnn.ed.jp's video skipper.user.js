// ==UserScript==
// @name           nnn.ed.jp's video skipper
// @namespace      Kohe_Ioroi
// @description    Skip Videos(beta)
// @version        0.1
// @include        https://secure.nnn.ed.jp/mypage/report/pc/movie/*
// @include        https://secure.nnn.ed.jp/mypage/report/pc/test/*
// ==/UserScript==
(function(){
    var resSelect = document.evaluate('//*[@id="nextMovie"]',document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null );
    if(!resSelect.snapshotLength){
        var resSelect2 = document.evaluate('//*[@id="nextTest"]',document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null );
        if(!resSelect2.snapshotLength){alert("レポート・設問の回答を行ってください。");
        }else{
            setInterval(function(){document.getElementById('nextTest').click();}, 1000);}
    }else{
        setInterval(function(){document.getElementById('nextMovie').click();}, 1000);}
}
)();
