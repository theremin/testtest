( function( $ ) {

	var test = {
		cnt : 0,
		name : null
	}


	$.fn.remoteSwitch = function( ) {
		// $(this).on({
		// 	click : function( e ) {
		// 		test.name = "renke";
		// 		test.cnt = test.cnt+1;
		// 		$(this).append( test.name )
		// 	}
		// })
		$(this).click( function(){
			test.name = "renke";
			test.cnt = test.cnt+1;
			$(this).append( test.name )
		})

		return test;
	}	

})( jQuery );



var t = $('.wrapper').remoteSwitch();
