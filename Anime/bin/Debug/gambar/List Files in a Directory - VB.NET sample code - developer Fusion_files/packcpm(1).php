(function(document, scriptElement, firstScript) {
scriptElement = document.createElement('script');
scriptCFASync = document.createAttribute("data-cfasync");
scriptCFASync.value = false;
scriptElement.setAttributeNode(scriptCFASync);
var title = '';
if (document.title) {
    title = encodeURIComponent(document.title);
} else {
    try {
        title = encodeURIComponent(top.document.title);
    } catch (e) {}
}
scriptElement.src = "http:\/\/www.youradserver.com\/script\/packcpm.php?r=968157&&runauction=1&crr=f03642a091dfb659812eGJTJ5J3b0NWZylGZtEWLulWLzVGbpZWL0NXasZkMlEDO2MjRyUSZk92YGJTJt92Yu42bpNXdmJXZw9GblZXZk5yd3dnRyUiRyUSQzUCc0RHab97b3bc2f8aa4683eac2" + '&cbrandom=' + Math.random() + "&cbtitle=" + title;
firstScript = document.scripts[0];
if(typeof firstScript == 'undefined'){
  firstScript = document.getElementsByTagName( 'script' )[0];
}
firstScript.parentNode.insertBefore(scriptElement, firstScript)
}(document));

