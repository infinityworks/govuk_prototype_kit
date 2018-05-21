
// Toggle tooltips
$( ".tooltip" ).click(function() {

  if ( $( this ).hasClass( "tooltip--show" ) ) {
    $( ".tooltip" ).removeClass("tooltip--show");
  } else {
    $( ".tooltip" ).removeClass("tooltip--show");
    $( this ).addClass ("tooltip--show");
  }

});


$( ".callout--mobile-accordion .callout__title" ).click(function() {

  $(this).parent().toggleClass("is-open");

});
