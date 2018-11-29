// timed error messages that appear on screen
$( function () {
  var errorDisplayed = false;
  var errorMessages = ["Tire Pressure Low","Dead Battery","Gas Cap Issues","Starter Issues"];
  var min = 0, max = 3;
  var errorInterval = 10000;

  window.setInterval( function() {
    if( errorDisplayed == false ) {
      $(".on-image").show("slow", function() {});
      $(".off-image").hide("slow", function() {});
      errorDisplayed = true;
      var random = Math.floor(Math.random() * (+max - +min)) + +min;
      console.log("errorMessage:", errorMessages[random]);
      $(".error-message").html(errorMessages[random]);
      clearInterval();
    }// end errorDisplayed FALSE

    $(document).keypress( function(e) {
      // if 'enter' is clicked to confirm that
      // error was identified
      if(e.which == 13) {
        $(".off-image").show("slow", function() {});
        $(".on-image").hide("slow", function() {});
        errorDisplayed = false;
        $(".error-message").html("");
      }
    });

  }, errorInterval);// end setInterval

})// end function
