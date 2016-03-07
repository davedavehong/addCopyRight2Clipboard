/**
 * Created by dave on 3月4 004.
 */
var localUrl = window.location.host;
function setClipboardText(event) {
    event.preventDefault();
    var node = document.createElement('div');
    node.appendChild(window.getSelection().getRangeAt(0).cloneContents());
    var htmlData = '商业转载请联系作者获得授权，非商业转载请注明出处。<br />'
        + '作者：dave<br />链接：<a href="http://'+localUrl+'">'+localUrl+'</a><br />'
        + '来源：<a href="http://baidu.com">elephstor.com</a><br /><br />'
        + node.innerHTML
        + '</div>';
    var textData = '商业转载请联系作者获得授权，非商业转载请注明出处。\n'
        + '作者：dave\n链接：'+localUrl+'\n'
        + '来源：elephstor\n'
        + window.getSelection().getRangeAt(0);
    if (event.clipboardData) {
        event.clipboardData.setData("text/html", htmlData);
        event.clipboardData.setData("text/plain", textData);
    }
    else if (window.clipboardData) {
        return window.clipboardData.setData("text", textData);
    }
}

function showCopyRightMsg(event) {
    event.preventDefault();
    var mySpan = document.createElement("span");
    mySpan.innerHTML = "版权保护啊";
    mySpan.setAttribute('id', 'myMenu');

    var selectionParent = window.getSelection().focusNode.parentElement;
    selectionParent.appendChild(mySpan);
    setTimeout(function () {
        mySpan.style.opacity = 0;
    }, 2000);

    setTimeout(function () {
        selectionParent.removeChild(mySpan)
    }, 3000)
}
var pageA = document.getElementById("pageA");
pageA.addEventListener('copy', function (e) {
    setClipboardText(e);
});

var pageB = document.getElementById('pageB');
pageB.addEventListener('copy', function (e) {
    showCopyRightMsg(e)
});