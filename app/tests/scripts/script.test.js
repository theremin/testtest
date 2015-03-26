describe('appendText', function(){

	

	beforeEach( function(){
		//$('<div class="wrapper"></div>').remove();
		//$('<div class="wrapper">hier clicken</div>').appendTo('body');

		
	});

	afterEach( function(){
		//$('<div class="wrapper" />').remove();
	})

	it("should return null on init", function(){
		var html = $(".wrapper");
		expect(html.remoteSwitch().name).toBeNull();
	});

	it("counter should be 0 on init ", function(){
		var html = $(".wrapper");
		expect(html.remoteSwitch().cnt).toBe( 0 );
	});

	// it("counter should be increase step 1 on click", function(){
	// 	var html = $(".wrapper");
	// 	html.remoteSwitch();
	// 	console.log("..", html.remoteSwitch().cnt);
	// 	html.click();
	// 	console.log("..", html.remoteSwitch().cnt);
	// 	expect(html.remoteSwitch().cnt).toBe( 1 );
	// });
	

	// it("should append text after click", function(){
	// 	var html = $(".wrapper");

	// 	$(html).append('hier clicken');
	// 	// html.remoteSwitch();
	// 	// expect( $(html).html() ).toBe(undefined);

	// 	$(html).click();
	// 	expect( $(html).html() ).toBe(undefined);
	// });

	



});