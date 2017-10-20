(function($, window) {
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    dots:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	});
})(jQuery, window);