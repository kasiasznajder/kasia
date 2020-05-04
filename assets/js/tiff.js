// :)

$(document).ready(function(){

	var colors = [
			[240, 80, 80], // rose
			[255, 75, 0], // orange-red
			[255, 130, 10], // orange
			[255,200,0] // orange-yellow
			[10, 140, 10], // lime
			[40, 90, 30], // green
			[30, 185, 205], // teal
			[65, 95, 255], // blue
			[115, 135, 150], // slate
			[160, 130, 100], // taupe
			]
		, color = colors[Math.random()*colors.length|0];

	// $('body').css('background','rgba('+color[0]+','+color[1]+','+color[2]+',0.05)');

	$('head').append('<style type="text/css">.painted{color:rgb('+color[0]+','+color[1]+','+color[2]+');text-shadow: 1px 1px 0px rgb('+color[0]+','+color[1]+','+color[2]+'), -1px -1px 0px rgb('+color[0]+','+color[1]+','+color[2]+');}a:link,a:visited{border-bottom-color: rgb('+color[0]+','+color[1]+','+color[2]+');</style>');

	wrapChars();

	$('letter').hover(function() {
		paintThis($(this));
	});

	// maybe not perfect but whatevs
	// if ( isMobileDevice() ) {
	// 	var x = $('letter').length - 1;
	// 	setTimeout(function(){
	// 		var selfPaint = setInterval(function(){
				
	// 			paintThis( $('letter').eq(x) );
				
	// 			if ( x > 0 ) { x-- } 
	// 			else { console.log( 'done'); clearInterval(selfPaint) }

	// 		}, 300 )
	// 	}, 50 )
	// }

	// $(window).scroll(function(){
	// 	dipDye();
	// });

	// split chars & wrap with `letter` tag
	function wrapChars() {

		$("p, li").children().andSelf().not(".no-paint").contents().each(function(){
			if (this.nodeType == 3) {
				
				var $this = $(this);
				$this.replaceWith($this.text().replace(/(\S)/g, "<letter>$&</letter>"));
			}
		});

	}

	// dip dye `letter` if scrolled out of view
	function dipDye() {

		var offset = $(document).scrollTop();

		$('p').each(function(){

			var pPos = $(this).offset();
			var pTop = pPos.top;

			if ( pTop <= offset ) {

				$(this).find('letter').each(function(){

					var letterPos = $(this).offset();
					var letterTop = letterPos.top;
					
					if ( letterTop <= offset-15 ) {
						paintThis($(this));
					}

				});

			}

		});
	}

	// paint `letter`
	function paintThis(letter) {
		letter.addClass('painted');
	}

	// https://coderwall.com/p/i817wa/one-line-function-to-detect-mobile-devices-with-javascript
	function isMobileDevice() {
		return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	};

});



