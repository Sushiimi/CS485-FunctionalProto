// fill tank function
$( function () {

	$( '.fill-tank-button' ).click( function () {
       $( '#fuel-gauge' ).val( 100 );
       $( '#miles-left' ).html( "Miles until empty: <strong>100</strong> miles" );
	})
})

// drive 10 miles function
$( function () {

	$( '.drive-button' ).click( function () {
		var previousValue = $( '#fuel-gauge' ).val();
  
    if ( previousValue == 0 )
    {
      alert( "No fuel left, you must refuel the vehicle!" );
    }
    else
    {
      var newValue = previousValue - 10;
      $( '#fuel-gauge' ).val( newValue );
      $( '#miles-left').html( `Miles until empty: <strong>${newValue}</strong> miles` );
    }
       
	})
})