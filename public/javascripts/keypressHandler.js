// function to change modes on keypress
// 1,2,3 for standard
// 3,4,5 for travel

$( function () {
  var standardRandoms = ['1', '2', '3'];
  var travelRandoms = ['1', '2', '3'];
  

  // false is error testing, true is identification testing
  var testingMode = false;

  // shuffle the arrays for random sets between test subjects
  shuffle(standardRandoms);
  shuffle(travelRandoms);
  console.log("standard: ", standardRandoms);
  console.log("travel:", travelRandoms);
  $( ".mode-image" ).attr('src', `images/standard${standardRandoms[0]}.jpg`);// set initial image randomly

  $(document).keypress( function(e) {
    // 1 = 49, 2 = 50, 3 = 51
    if( e.which == 49 ) {
      console.log("'1' key pressed");
      $( ".mode-image" ).attr('src', `images/standard${standardRandoms[0]}.jpg`);
    }
    if( e.which == 50 ) {
      console.log("'2' key pressed");
      $( ".mode-image" ).attr('src', `images/standard${standardRandoms[1]}.jpg`);
    }
    if( e.which == 51 ) {
      console.log("'3' key pressed");
      $( ".mode-image" ).attr('src', `images/standard${standardRandoms[2]}.jpg`);
    }
    // 4 = 52, 5 = 53, 6 = 54
    if( e.which == 52 ) {
      console.log("'4' key pressed");
      $( ".mode-image" ).attr('src', `images/travel${travelRandoms[0]}.jpg`);
    }
    if( e.which == 53 ) {
      console.log("'5' key pressed");
      $( ".mode-image" ).attr('src', `images/travel${travelRandoms[1]}.jpg`);
    }
    if( e.which == 54 ) {
      console.log("'6' key pressed");
      $( ".mode-image" ).attr('src', `images/travel${travelRandoms[2]}.jpg`);
    }
    // 116 = 't'
    if ( e.which == 116 ) {
      testingMode = !testingMode;
      console.log("testing mode", testingMode);
      if( testingMode == true ) {
        alert("identification testing mode started");
        $( ".hideAll" ).hide();
      }
      else {
        alert("error testing mode started");
        $(".hideAll" ).show();
      }
    }
    // 100 = d; debug menu to check for keymapping
    if( e.which == 100 ) {
      alert("Press 'enter' to remove error on confirmation\nPress 1,2,3 for standard modes, Press 4,5,6 for travel modes\nPress t to change to error testing mode\nPress 'space' show dashboard when in identification mode");
    }
  });

  $(document).keydown( function(e) {
    if ( e.which == 32 ) { 
      console.log("'space' key pressed");
      $( ".hideAll" ).show();
    }
  })

  $(document).keyup( function(e) {
    if (e.which == 32 ) {
      console.log("'space' key released");
      $( ".hideAll" ).hide();
    }
  })
  
})