$(document).ready(function () {
  "use strict";

  // Video Replace from data attribute
  $(".video-button").on("click", function () {
    var video =
      '<iframe allowfullscreen src="' +
      $(this).attr("data-video") +
      '"></iframe>';
    $(this).replaceWith(video);
  });

  //  AOS Initialize
  AOS.init();

  $(window).on("scroll", function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
      $("#navigationBar").addClass("sticky-nav");
    } else {
      $("#navigationBar").removeClass("sticky-nav");
    }
  });

  // Background Shape Switches
  TweenMax.fromTo(
    ".switch",
    2,
    { opacity: 1 },
    { opacity: 0.3, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );
  TweenMax.fromTo(
    ".switch-two",
    2,
    { y: 0 },
    { y: 10, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );
  TweenMax.fromTo(
    ".switch-three",
    2,
    { x: 0 },
    { x: 10, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );

  // project Item Match Height
  // $(".project-item-two").matchHeight({
  //   byRow: 0,
  // });
    // my slick slider options
const options = {
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  adaptiveHeight: true,
  autoplay: true,
  fade: true,
  centerMode: true,
  centerPadding: "0px",
  autoplay: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: false,
        autoplay: true,
        infinite: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        infinite: false,
      },
    },
  ],
};

// my slick slider as const object
const mySlider = $('.feedback-slider').on('init', function(slick) {

  // set this slider as const for use in set time out
  const slider = this;
    
  // slight delay so init completes render
  setTimeout(function() {

    // dot buttons
    let dots = $('.slick-dots > li > button', slider);

    // each dot button function
    $.each(dots, function(i,e) {

      // slide id
      let slide_id = $(this).attr('aria-controls');
      
      // custom dot image
      let dot_img = $('#'+slide_id).data('dot-img');
      
      $(this).html('<img src="' + dot_img + '" alt="" />');

    });

  }, 100);


}).slick(options);

//  more project lode
$(function () {
  $("body").on('click touchstart', '.next-more', function (e) {
    e.preventDefault();
    $(".lode-next:hidden").slice(0, 4).slideDown();
    if ($(".lode-next:hidden").length == 0) {
      $(".next-more").css('display', 'none');
    }
  });
});

// more blog lode
  $(function () {
		$("body").on('click touchstart', '.load-more', function (e) {
			e.preventDefault();
			$(".next-blog:hidden").slice(0, 3).slideDown();
			if ($(".next-blog:hidden").length == 0) {
				$(".load-more").css('display', 'none');
			}
		});
	});
  // counter-up
  $(".counter").counterUp({});
  
});
