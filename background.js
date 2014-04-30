$(document).ready(function () {

  alert("background script is running!");

  chrome.browserAction.setBadgeText({text: "1"});
});