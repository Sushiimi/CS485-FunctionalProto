$( function() {

  $(document).keypress( function(e) {
    if(e.which == 116) {
      alert("Press 'enter' to remove error\nPress 'r' to shift up, Press 'l' to shift down\nPress 1 for standard mode, Press 2 for travel mode");
    }
  });

})