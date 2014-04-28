$(document).ready(function () {

  var API_URl = "http://localhost:3000/comments"

  var annotator = {

    append_fullURL: function() {
      chrome.tabs.getSelected(null,function(tab) {
        var fullURL = tab.url.toString();
        $("#full-url").append( "<p>" + fullURL + "</p>" );
        $.get('http://localhost:3000/comments?web_page=' + fullURL, 
          function(returnedData){
            $("#json-response").append(returnedData.shortened_url);
        });
      });
    }
  }
    annotator.append_fullURL();
});