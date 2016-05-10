
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        $("#customfield_12720").val("12002");
        $("a[title='P2']").trigger("click");
        $("#priority").val("3");
        $("#priority-field").val("P2");
        $("#priority-single-select").val("3");
        $("#customfield_12721").val(domain);
        $("#customfield_10033").val("12740");
        $("#versions").val("17357");
        $("#versions-textarea").val("EE 2.0 GA Milestone12");
            if(request.message.myurl.indexOf("pull") > -1) {
                    $("#labels-textarea").val("github PR");
                    $("#description").val("Process pull request \n"+request.message.myurl);
                    $("#summary").val("[Github][PR] " + request.message.mytitle);
            } else {
                    $("#labels-textarea").val("github");
                    $("#description").val(request.message.myurl + "\n " + "\n Possibly use https://github.corp.magento.com/hsharhan/public-pr-processor to process PR \n --- {quote}"+request.message.mydesc +"{quote}");
                    $("#summary").val("[Github] "+request.message.mytitle);
            }
        var input = $("#labels-textarea").focus().blur();
            $("#components-textarea").focus();
    }
);
