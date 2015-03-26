( function( $ ) {

	var test = {
		name : null
	}
	

	$.fn.remoteSwitch = function( ) {
		$(this).on({
			click : function( e ) {
				test.name = "renke";

				$(this).append( test.name )
			}
		})

		return test;
	}	

})( jQuery );



var t = $('.wrapper').remoteSwitch();
