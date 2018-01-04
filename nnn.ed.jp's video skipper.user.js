// ==UserScript==
// @name           nnn.ed.jp's video skipper
// @namespace      Kohe_Ioroi
// @description    Skip Videos(beta)
// @include        https://secure.nnn.ed.jp/mypage/report/pc/movie/*
// ==/UserScript==
(function(){
    var resSelect = document.evaluate('//*[@id="nextMovie"]',document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null );
    if(!resSelect.snapshotLength){
        console.log('次の動画が存在しません。レポート・テストをチェックします...');
        var resSelect2 = document.evaluate('//*[@id="nextTest"]',document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null );
        if(!resSelect2.snapshotLength){
            console.log('レポート・テストが存在しません。処理をスキップします。');
        }else{
            console.log('レポート・テストの存在を確認しました。自動スキップを開始します。');
            setInterval(function(){document.getElementById('nextTest').click();}, 1000);}
    }else{
        console.log('次の動画の存在を確認しました。自動スキップを開始します。');
        setInterval(function(){document.getElementById('nextMovie').click();}, 1000);}
}
)();
