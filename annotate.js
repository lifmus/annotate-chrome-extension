$(document).ready(function () {

  var API_URl = "http://localhost:3000/comments"

  var annotator = {

    append_fullURL: function() {
      chrome.tabs.getSelected(null,function(tab) {
        var fullURL = tab.url.toString();
        $("#full-url").append( "<p>" + fullURL + "</p>" );

        $('<iframe />', {
            name: 'frame1',
            id: 'frame1',
            width: '100%',
            height: '100%',
            frameborder: '0',
            src: 'http://localhost:3000/comments?web_page=' + fullURL
        }).appendTo('body');

        // $.get('http://localhost:3000/comments?web_page=' + fullURL, 
        //   function(returnedData){
        //     $("#json-response").append(returnedData.shortened_url);
        // });
      });
    }
  }
    annotator.append_fullURL();
});