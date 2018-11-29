// function to change modes on keypress
// 1 for standard
// 2 for travel
$( function () {

  $(document).keypress( function(e) {
    if(e.which == 49) {
      //alert("'1' key pressed");
      $( ".standard" ).show("slow", function() {});
      $( ".travel" ).hide("slow", function() {});
    }
    if(e.which == 50) {
      //alert("'2' key pressed")
      $( ".standard" ).hide("slow", function() {});
      $( ".travel" ).show("slow", function() {});
    }
  });
})