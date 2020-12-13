(function($) {
  $.fn.menumaker = function(options) {  
   var cssmenu = $(this), settings = $.extend({
     format: "dropdown",
     sticky: false
   }, options);
   return this.each(function() {
     $(this).find(".button").on('click', function(){
       $(this).toggleClass('menu-opened');
       var mainmenu = $(this).next('ul');
       if (mainmenu.hasClass('open')) { 
         mainmenu.slideToggle().removeClass('open');
       }
       else {
         mainmenu.slideToggle().addClass('open');
         if (settings.format === "dropdown") {
           mainmenu.find('ul').show();
         }
       }
     });
     cssmenu.find('li ul').parent().addClass('has-sub');
  multiTg = function() {
       cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
       cssmenu.find('.submenu-button').on('click', function() {
         $(this).toggleClass('submenu-opened');
         if ($(this).siblings('ul').hasClass('open')) {
           $(this).siblings('ul').removeClass('open').slideToggle();
         }
         else {
           $(this).siblings('ul').addClass('open').slideToggle();
         }
       });
     };
     if (settings.format === 'multitoggle') multiTg();
     else cssmenu.addClass('dropdown');
     if (settings.sticky === true) cssmenu.css('position', 'fixed');
  resizeFix = function() {
    var mediasize = 1170;
       if ($( window ).width() > mediasize) {
         cssmenu.find('ul').show();
       }
       if ($(window).width() <= mediasize) {
         cssmenu.find('ul').hide().removeClass('open');
       }
     };
     resizeFix();
     return $(window).on('resize', resizeFix);
   });
    };
  })(jQuery);
  
  (function($){
  $(document).ready(function(){
  // Get images.
  var images = $('.slider > img');

  // Set starting index.
  var index = images.index($('.active'));
  $('#counter').text((index + 1) + ' of ' + images.length);

  $('.next').on('click', function () {
      var currentImg = $('.active');
      var nextImg = currentImg.next();

      if (nextImg.length) {
          currentImg.removeClass('active').css('z-index', -10);
          nextImg.addClass('active').css('z-index', 10);

          // Find the index of the image.
          var index = images.index(nextImg);
          $('#counter').text((index + 1) + ' of ' + images.length);
      }
  });

  $('.prev').on('click', function () {
      var currentImg = $('.active');
      var prevImg = currentImg.prev();

      if (prevImg.length) {
          currentImg.removeClass('active').css('z-index', -10);
          prevImg.addClass('active').css('z-index', 10);

          var index = images.index(prevImg);
          $('#counter').text((index + 1) + ' of ' + images.length);
      }
  });

  //menu
  $("#cssmenu").menumaker({
     format: "multitoggle"
  });
  });
  })(jQuery);
  
