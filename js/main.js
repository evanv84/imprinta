// $(function(){
//   'use strict';
//   var $page = $('#page-content'),
//       options = {
//         debug: true,
//         prefetch: true,
//         cacheLength: 2,
//         onStart: {
//           duration: 250, // Duration of our animation
//           render: function ($container) {
//             // Add your CSS animation reversing class
//             $container.addClass('is-exiting');
//             // Restart your animation
//             smoothState.restartCSSAnimations();
//           }
//         },
//         onReady: {
//           duration: 0,
//           render: function ($container, $newContent) {
//             // Remove your CSS animation reversing class
//             $container.removeClass('is-exiting');
//             // Inject the new content
//             $container.html($newContent);
//           }
//         }
//       },
//       smoothState = $page.smoothState(options).data('smoothState');
// });

$(document).ready(function() {

	// Nav toggle
	  $('.nav-collapse').on('click', function(){
	    $('nav ul').toggleClass('showing');
	    $('#nav-icon').toggleClass('open');
	  });

	//Nav scroll
	$(window).scroll(function(event) {
		if ($(window).scrollTop()>=650){
			$('nav').addClass('nav-scroll');
		} else {
			$('nav').removeClass('nav-scroll');
		}

		if ($(window).scrollTop()<=649){
			$('nav').removeClass('nav-scroll');
		} else {
			$('nav').addClass('nav-scroll');
		}
	});

	//Init ScrollMagic Controller
	var controller = new ScrollMagic.Controller();

	//Header parallax effect
	var headerBG = new TimelineMax();

	headerBG
		.to("header .bcg", 1, {y:300, ease: Linear.easeNone});

	var headerScene = new ScrollMagic.Scene({
		triggerElement: "#top",
		triggerHook: "0",
		duration: 700
	})
	.setTween(headerBG)
	.addTo(controller);

	//Icons staggerTo
	var icons = new TimelineMax();

	icons
		.to(".ic-1", 0.4, {y:-20, autoAlpha: 1, ease: Linear.easeNone})
		.to(".ic-1 .check-1, .ic-1 .check-2", 0.3, {autoAlpha: 1, ease: Linear.easeNone})
		.to(".ic-2", 0.4, {y:-20, autoAlpha: 1, ease: Linear.easeNone}, "-=0.3")
		.to(".ic-2 .check-1, .ic-2 .check-2", 0.3, {autoAlpha: 1, ease: Linear.easeNone})
		.to(".ic-3", 0.4, {y:-20, autoAlpha: 1, ease: Linear.easeNone}, "-=0.3")
		.to(".ic-3 .check-1, .ic-3 .check-2", 0.3, {autoAlpha: 1, ease: Linear.easeNone})
		.to(".ic-4", 0.4, {y:-20, autoAlpha: 1, ease: Linear.easeNone}, "-=0.3")
		.to(".ic-4 .check-1, .ic-4 .check-2", 0.3, {autoAlpha: 1, ease: Linear.easeNone})
		.to(".ic-5", 0.4, {y:-20, autoAlpha: 1, ease: Linear.easeNone}, "-=0.3")
		.to(".ic-5 .check-1, .ic-5 .check-2", 0.3, {autoAlpha: 1, ease: Linear.easeNone})
		.to(".ic-6", 0.4, {y:-20, autoAlpha: 1, ease: Linear.easeNone}, "-=0.3")
		.to(".ic-6 .check-1, .ic-6 .check-2", 0.3, {autoAlpha: 1, ease: Linear.easeNone})

	var headerScene = new ScrollMagic.Scene({
		triggerElement: "#about",
		triggerHook: "0.5",
	})
	.setTween(icons)
	//.addIndicators()
	.addTo(controller);

	//NEW GALLERY CAROUSEL
	$(".newCarousel").owlCarousel({
 
	      loop:true,
	      margin:30,
	      nav:false,
	      dots: false,
	      stagePadding: 50,
	      autoplay:true,
	      autoplayTimeout:2500,
	      autoplayHoverPause:true,
	      autoplaySpeed: 1000,
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

	$("#feedback-gal").owlCarousel({
 
	      loop:true,
	      margin:30,
	      nav:false,
	      dots: false,
	      stagePadding: 50,
	      autoplay:true,
	      autoplayTimeout:3500,
	      autoplayHoverPause:true,
	      autoplaySpeed: 1000,
	      responsive:{
	          0:{
	              items:1
	          },
	          600:{
	              items:2
	          },
	          1000:{
	              items:4
	          }
	      }
	 
	  });

	console.log('texxxt');

	$(".offer-carousel").owlCarousel({
 
	      loop:true,
	      margin:0,
	      nav:true,
	      dots: false,
	      navText: ["<img src='http://imprinta.ru/wp-content/themes/imprinta/img/arrow-left.png' class='prev'>","<img src='http://imprinta.ru/wp-content/themes/imprinta/img/arrow-right.png' class='next'>"],
	      stagePadding: 0,
	      autoplay:true,
	      autoplayTimeout:5500,
	      autoplayHoverPause:true,
	      autoplaySpeed: 1000,
	      items: 1
	 
	  });

	

	$("a.galleryNew").fancybox();

	$("a.feedback-gallery").fancybox();

});