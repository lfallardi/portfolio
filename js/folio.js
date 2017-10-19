/*BOTONERA FOLIO*/

$(function() {
    var selectedClass = "";
    $(".fil-cat").click(function(){ 
    selectedClass = $(this).attr("data-rel"); 
     $("#folio").fadeTo(100, 0.1);
    $("#folio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#folio").fadeTo(300, 1);
    }, 300); 
    
  });
});