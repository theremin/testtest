describe('appendText', function(){

	

	beforeEach( function(){
		//$('<div class="wrapper"></div>').remove();
		$('<div class="wrapper">hier clicken</div>').appendTo('body');

		
	});

	afterEach( function(){
		$('<div class="wrapper" />').remove();
	})

	it("should return null on init", function(){
		var html = $(".wrapper");
		expect(html.remoteSwitch().name).toBeNull();
	});
	

	// it("should append text after click", function(){
	// 	var html = $(".wrapper");
	// 	html.remoteSwitch();
	// 	expect( $(html).html() ).toBe('hier clicken');

	// 	$(html).click();
	// 	expect( $(html).html() ).toBe('hier clickenrenke');
	// });

	



});