// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            var bugurl = "https://jira.corp.x.com/secure/CreateIssue.jspa?pid=11030&issuetype=1";
            var taskurl = "https://jira.corp.x.com/secure/CreateIssue.jspa?pid=11030&issuetype=3";

            var githubTitle = $("span[class^='js-issue-title']").contents()[0];
            var issueId = $("span[class^='gh-header-number']").contents()[0];
            var githubDescription = $("div[class^='comment-body markdown-body markdown-format js-comment-body']").text();
            var githubReporter = $("a[class^='author']").contents()[0].valueOf();

            var domInfo = {
                mytitle:   githubTitle.data +" " +issueId.data,
                mydesc:  githubDescription,
                myurl: document.URL
            };

            var myurl = "";

            if(document.URL.indexOf("pull") > -1) {
                myurl = taskurl;
            } else {
                myurl = bugurl;
            }

            chrome.runtime.sendMessage({"message": "open_new_tab", "url": myurl, "myDOMInfo": domInfo});
        }
    }
);

var text = document.body.innerHTML;
if ((text.indexOf("MAGETWO") > -1) && (window.location.href.indexOf("github.com") > -1 || window.location.href.indexOf("github.corp.magento.com") > -1)) {
    var para = document.getElementsByTagName("p");
    for (var i = 0; i < para.length; i++) {
        var index = para[i].innerHTML.indexOf("MAGETWO-");
        if (index > -1) {
            var ticketNo = para[i].innerHTML.substring(index, index+13);
            para[i].innerHTML = para[i].innerHTML.replace(ticketNo,"<a href='https://jira.corp.x.com/browse/"+ticketNo+"' target=_blank>"+ticketNo+"</a>");
        }
    }

}