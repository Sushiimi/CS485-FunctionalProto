// function to control shifting gears
/*
$( function() {
  var currentGear = 1;

  $(document).keypress( function(e) {

    // 'r' will signify right arrow on keyboard to shift change up
    if(e.which == 114) {
      if( currentGear < 6 && currentGear >= 0 ) {
        $(`.col${currentGear}`).css('background-color','transparent');
        $(`.col${currentGear + 1}`).css('background-color','lightblue');
        currentGear = currentGear + 1;
        console.log(currentGear);
      }
    }

    // 'l' will signify left arrow on keyboard to shift change down
    if(e.which == 108) {
      if( currentGear > 1 && currentGear <= 6 ) {
        $(`.col${currentGear}`).css('background-color','transparent');
        $(`.col${currentGear - 1}`).css('background-color','lightblue');
        currentGear = currentGear - 1;
        console.log(currentGear);
      }
    }

  });

})
*/