
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



$( ".task-list-action__link" ).click(function(e) {
  $(this).parent().prev().slideToggle( "fast", function() {
    // Animation complete.
  });

  e.preventDefault();

});
