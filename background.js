// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
});

// This block is new!
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse, details) {
        //alert(request.myDOMInfo);
        chrome.tabs.create({ url: request.url }, function(tab) {
            // Why do you query, when tab is already given?
            chrome.tabs.executeScript(tab.id, {file:"jquery-2.2.1.min.js"}, function() {
                // This executes only after jQuery has been injected and executed
                chrome.tabs.executeScript(tab.id, {file:"script2.js"}, function() {
                    // This executes only after your content script executes
                    chrome.tabs.sendMessage(tab.id, {"message": request.myDOMInfo});
                });
            });
        });

    }
);
