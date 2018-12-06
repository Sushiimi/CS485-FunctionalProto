// timed error messages that appear on screen
$( function () {
  var errorDisplayed = false;
  var errorMessages = ["Tire Pressure Low","Dead Battery","Gas Cap Issues","Starter Issues"];
  var errorInterval = 3000;
  var currentErrorIndex = 0;
  
  shuffle( errorMessages )
  console.log( errorMessages );

  window.setInterval( function() {
    if( errorDisplayed == false ) {
      $(".on-image").show("slow", function() {});
      $(".off-image").hide("slow", function() {});
      errorDisplayed = true;
      console.log("currentErrorIndex before:", currentErrorIndex);
      $(".error-message").html(errorMessages[currentErrorIndex++]);
      if (currentErrorIndex == 4) {
        currentErrorIndex = 0;
      }
      console.log("currentErrorIndex after:", currentErrorIndex);
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
