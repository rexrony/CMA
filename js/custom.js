    // AOS
    AOS.init({
        easing: 'ease-in-out',
        delay: 100,
        duration: 1000,
        offset: 200,
        disable: 'mobile',
		  disable: function() {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  },
      });
  
  /**Main Slider**/
  $('.main-slider').slick({
    dots: false,
    autoplay: false,
    arrows:true,
    autoplaySpeed: 2000,
    pauseOnDotsHover: true,
  });
 /* 
var slideWrapper = $(".main-slider"),
    iframes = slideWrapper.find('.embed-player'),
    lazyImages = slideWrapper.find('.slide-image'),
    lazyCounter = 0;

// POST commands to YouTube or Vimeo API
function postMessageToPlayer(player, command){
  if (player == null || command == null) return;
  player.contentWindow.postMessage(JSON.stringify(command), "*");
}

// When the slide is changing
function playPauseVideo(slick, control){
  var currentSlide, slideType, startTime, player, video;

  currentSlide = slick.find(".slick-current");
  slideType = currentSlide.attr("class").split(" ")[1];
  player = currentSlide.find("iframe").get(0);
  startTime = currentSlide.data("video-start");

  if (slideType === "vimeo") {
    switch (control) {
      case "play":
        if ((startTime != null && startTime > 0 ) && !currentSlide.hasClass('started')) {
          currentSlide.addClass('started');
          postMessageToPlayer(player, {
            "method": "setCurrentTime",
            "value" : startTime
          });
        }
        postMessageToPlayer(player, {
          "method": "play",
          "value" : 1
        });
        break;
      case "pause":
        postMessageToPlayer(player, {
          "method": "pause",
          "value": 1
        });
        break;
    }
  } else if (slideType === "youtube") {
    switch (control) {
      case "play":
        postMessageToPlayer(player, {
          "event": "command",
          "func": "mute"
        });
        postMessageToPlayer(player, {
          "event": "command",
          "func": "playVideo"
        });
        break;
      case "pause":
        postMessageToPlayer(player, {
          "event": "command",
          "func": "pauseVideo"
        });
        break;
    }
  } else if (slideType === "video") {
    video = currentSlide.children("video").get(0);
    if (video != null) {
      if (control === "play"){
        video.play();
      } else {
        video.pause();
      }
    }
  }
}

// Resize player
function resizePlayer(iframes, ratio) {
  if (!iframes[0]) return;
  var win = $(".main-slider"),
      width = win.width(),
      playerWidth,
      height = win.height(),
      playerHeight,
      ratio = ratio || 16/9;

  iframes.each(function(){
    var current = $(this);
    if (width / ratio < height) {
      playerWidth = Math.ceil(height * ratio);
      current.width(playerWidth).height(height).css({
        left: (width - playerWidth) / 2,
         top: 0
        });
    } else {
      playerHeight = Math.ceil(width / ratio);
      current.width(width).height(playerHeight).css({
        left: 0,
        top: (height - playerHeight) / 2
      });
    }
  });
}

// DOM Ready
$(function() {
  // Initialize
  slideWrapper.on("init", function(slick){
    slick = $(slick.currentTarget);
    setTimeout(function(){
      playPauseVideo(slick,"play");
    }, 1000);
    resizePlayer(iframes, 16/9);
  });
  slideWrapper.on("beforeChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"pause");
  });
  slideWrapper.on("afterChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"play");
  });
  slideWrapper.on("lazyLoaded", function(event, slick, image, imageSource) {
    lazyCounter++;
    if (lazyCounter === lazyImages.length){
      lazyImages.addClass('show');
      // slideWrapper.slick("slickPlay");
    }
  });

  //start the slider
  slideWrapper.slick({
    // fade:true,
    autoplaySpeed:4000,
    lazyLoad:"progressive",
    speed:600,
    arrows:false,
    dots:true,
    cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)"
  });
});

// Resize event
$(window).on("resize.slickVideoPlayer", function(){  
  resizePlayer(iframes, 16/9);
});
*/
  /**Brand logo Slider**/
  $('.brands-logos').slick({
    dots: true,
    autoplay: true,
    arrows:true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplaySpeed: 2000, 
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      } 
    ]
  });
    /**Brand Slider**/
  $('.brand-slider').slick({
    dots: false,
    autoplay: false,
    arrows:false,
    autoplaySpeed: 2000,
	 slidesToShow: 1,
     slidesToScroll: 1,
    pauseOnDotsHover: true,
	asNavFor: '.brand-nav'
	 /* customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<a><img src="'+thumb+'"></a>';
    },*/

  });
  
  $('.brand-nav').slick({
  slidesToShow: 6,
  slidesToScroll:2,
  asNavFor: '.brand-slider',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  	    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
       
      
        }
      },
	  
	  {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
       
      
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      } 
    ]
});
    $('.core-values').slick({
    dots: true,
    autoplay: true,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplaySpeed: 1000, 
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      } 
    ]
  });
  /*--------------------------------Back to top----------------------------------*/
$(document).ready(function(){$("#back-top").hide();$(function(){$(window).scroll(function(){if($(this).scrollTop()>100){$("#back-top").fadeIn()}else{$("#back-top").fadeOut()}});$("#back-top a").click(function(){$("body,html").animate({scrollTop:0},800);return false})})});

/*****************************/
//Search Script
/******Search Script**********/
$('#toggle').click(function() {
 $(this).toggleClass('active');
//$(this).addClass('active');
   $('#overlay').toggleClass('open');
  });

$(function() {
  $('.searchtoggle').on("click", function(event) {
    event.preventDefault();
    $("#search").addClass("open");
    $('#search > form > input[type="text"]').focus();
  });

  $("#search, #search button.close, .close, .x-close").on("click keyup", function(event) {
    if (
      event.target == this ||
      event.target.className == "close" ||
      event.keyCode == 27
    ) {
      $(this).removeClass("open");
    }
  });

  /*$("form").submit(function(event) {
    event.preventDefault();
    return false;
  });*/
});


/**
 * A simple script to prevent empty searches
 */
$(document).ready(function(){        
    $('#searchform').submit(function(e) { // run the submit function, pin an event to it
        var s = $( this ).find("#search").val($.trim($( this ).find("#search").val())); // find the #s, which is the search input id and trim any spaces from the start and end
        if (!s.val()) { // if s has no value, proceed
            e.preventDefault(); // prevent the default submission
            alert("Your search is empty!"); // alert that the search is empty
            $('#search').focus(); // focus on the search input
        }
    });
    
        $('.search-submit').click(function(e) { // run the submit function, pin an event to it
        var s = $( this ).find(".search-field").val($.trim($( this ).find(".search-field").val())); // find the #s, which is the search input id and trim any spaces from the start and end
        if (!s.val()) { // if s has no value, proceed
            e.preventDefault(); // prevent the default submission
            alert("Your search is empty!"); // alert that the search is empty
            $('.search-field').focus(); // focus on the search input
        }
    });
  });
	
var $video  = $('#carvideo'),
    $window = $(window); 

$(window).resize(function(){
    
    var height = $window.height();
    $video.css('height', height);
    
    var videoWidth = $video.width(),
        windowWidth = $window.width(),
    marginLeftAdjust =   (windowWidth - videoWidth) / 2;
    
    $video.css({
        'height': height, 
        'marginLeft' : marginLeftAdjust
    });
}).resize();

/***On Scroll***/
$(document).on('click', 'a[href^="#"]', function(e) {
  // target element id
  var id = $(this).attr('href');

  // target element
  var $id = $(id);
  if ($id.length === 0) {
      return;
  }

  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();

  // top position relative to the document
  var pos = $id.offset().top;

  // animated top scrolling
  $('body, html').animate({scrollTop: pos});
});