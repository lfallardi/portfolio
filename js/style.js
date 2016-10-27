var lang = {
  "adobe": "100%",
  "html": "93%",
  "css": "86%",
  "javascript": "70%",
  "git": "74%",
  "angular": "65%"
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;
  
  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);
  
  multiply++;

});