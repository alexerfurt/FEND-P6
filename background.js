    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.executeScript(null, {file: "content.js"});
    });

	
chrome.runtime.onMessage.addListener(function(request, sender, sendMessage) {
  if (request.method == "getLocalStorage"){
  	  console.log(request);

    sendMessage({ data: localStorage[request.key] });
  } else {
    sendMessage({ }); // snub them.
  }
});