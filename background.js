// $(document).ready(function () {

  alert("background script is running!");

//   chrome.browserAction.setBadgeText({text: "1"});
// });

chrome.tabs.onUpdated.addListener(function(){
  alert("chrome tab is updated");
});