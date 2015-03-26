describe('appendText', function(){

	

	beforeEach( function(){
		//$('<div class="wrapper"></div>').remove();
		$('<div class="wrapper"/>').appendTo('body');
	});

	afterEach( function(){
		//$('<div class="wrapper" />').remove();
		$(".wrapper").remove();
	})

	it("should return null on init", function(){
		var html = $(".wrapper");
		expect(html.remoteSwitch().name).toBeNull();
	});

	it("counter should be 0 on init ", function(){
		var html = $(".wrapper");
		expect(html.remoteSwitch().cnt).toBe( 0 );
	});

	it("counter should be increase step 1 on click", function(){
		var html = $(".wrapper");
		html.remoteSwitch();		
		$(html).click();		
		expect(html.remoteSwitch().cnt).toBe( 1 );
	});
	
	it("should append text after click", function(){
		var html = $(".wrapper");
		html.remoteSwitch();
		expect( $(html).html() ).toBe('');

		$(html).click();
		expect( $(html).html() ).toBe('renke');
	});

	



});