$(document).ready(function(){

	/* Resize menu */

	$('.content-wrapper').on("scroll", function() {

		if($('.content-wrapper').scrollTop()>100) {
			$("header").removeClass("header--large").addClass("header--small");
		} else {
			$("header").removeClass("header--small").addClass("header--large");
		}

	}); 

	$("#js-open-menu").click(function(){ // class of the button div
		$('.menu__h2').addClass('animated fadeIn');
		$('.content-wrapper').addClass('overflow-none');
		return false;
	});

	$("#js-close-menu, #js-content-wrapper").click(function(){ // class of the button div
		$('.menu__h2').removeClass('animated fadeIn');
		$('.content-wrapper').removeClass('overflow-none');
		return false;
	});

	/* Gallery */

	var GammaSettings = {
		// order is important!
		viewport : [ {
			width : 1200,
			columns : 4
		}, {
			width : 900,
			columns : 3
		}, {
			width : 500,
			columns : 1
		}, { 
			width : 320,
			columns : 1
		}, { 
			width : 0,
			columns : 1
		} ]
	};

	Gamma.init( GammaSettings, fncallback );


	// Example how to add more items (just a dummy):

	var page = 0,
			items = ['<li class="gallery__li wow animated fadeIn"><div data-alt="img03" data-description="<h3>Description</h3>" data-max-width="1800" data-max-height="1350"><div data-src="img/xxxlarge/20.jpg" data-min-width="1300"></div><div data-src="img/xxlarge/20.jpg" data-min-width="1000"></div><div data-src="img/xlarge/20.jpg" data-min-width="700"></div><div data-src="img/large/20.jpg" data-min-width="300"></div><div data-src="img/medium/20.jpg" data-min-width="200"></div><div data-src="img/small/20.jpg" data-min-width="140"></div><div data-src="img/xsmall/20.jpg"></div><noscript><img class="gallery__img" src="img/xsmall/20.jpg" alt="img03"/></noscript></div></li><li class="gallery__li wow animated fadeIn"><div data-alt="img03" data-description="<h3>Description</h3>" data-max-width="1800" data-max-height="1350"><div data-src="img/xxxlarge/18.jpg" data-min-width="1300"></div><div data-src="img/xxlarge/18.jpg" data-min-width="1000"></div><div data-src="img/xlarge/18.jpg" data-min-width="700"></div><div data-src="img/large/18.jpg" data-min-width="300"></div><div data-src="img/medium/18.jpg" data-min-width="200"></div><div data-src="img/small/18.jpg" data-min-width="140"></div><div data-src="img/xsmall/18.jpg"></div><noscript><img class="gallery__img" src="img/xsmall/18.jpg" alt="img03"/></noscript></div></li>']

	function fncallback() {

		$( '#js-gallery__loadmore' ).show().on( 'click', function() {

			++page;
			var newitems = items[page-1]
			if( page <= 1 ) {

				Gamma.add( $( newitems ) );

			}
			if( page === 1 ) {

				$( this ).remove();

			}

		} );

	}

});
