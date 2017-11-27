$(function() {

  "use strict";

  /*===============================================
    Preloader
  ===============================================*/
  $(window).load(function () {
    $("body").addClass("loaded");
  });

  /*===============================================
    Scroll Spy
  ===============================================*/
  $('body').scrollspy({ 
    target: '.sidebar-menu'
  });

  /*===============================================
    Smooth Scrolling
  ===============================================*/
  var htmlBody = $("html,body");

  $(".sidebar-menu ul li a, .scroll-down a").on("click", function(e) {
      htmlBody.animate({scrollTop: $(this.hash).offset().top}, 800, "easeInOutQuart");  
    e.preventDefault();
  });

  /*===============================================
    Toggle menu
  ===============================================*/
  var menu = $(".sticky-sidebar-menu");
  var toggleBtn = $(".toggle-btn");

  toggleBtn.on("click", function(e) {
    if (menu.hasClass("show-menu")) {
      menu.removeClass("show-menu");
    }
    else {
      menu.addClass("show-menu");
    }
    e.stopPropagation();
  });

  // Navicon transform into X //
  toggleBtn.on("click", function() {
    if (toggleBtn.hasClass("toggle-close")) {
      toggleBtn.removeClass("toggle-close");
    }
    else {
      toggleBtn.addClass("toggle-close");
    }
  });

  // Close Menu
  $(document).on("click", function() {
    if (menu.hasClass("show-menu")) {
      menu.removeClass("show-menu");
    }
    if (toggleBtn.hasClass("toggle-close")) {
      toggleBtn.removeClass("toggle-close");
    }
  });

  /*===============================================
    MixItUp
  ===============================================*/
  $('#mix-container').mixItUp();

  /*===============================================
    Magnific Popup
  ===============================================*/
  $('.lightbox').magnificPopup({ 
    type:'inline',
    fixedContentPos: false,
    removalDelay: 100,
    closeBtnInside: true,
    preloader: false,
    mainClass: 'mfp-fade'
  });

  /*===============================================
    Counter
  ===============================================*/
  $(".facts-background").appear(function() {
    $('.counter').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  },{accX: 0, accY: -10});

  /*===============================================
    Owl Carousel Slider
  ===============================================*/
  $("#testimonialSlider").owlCarousel({
    items:1,
    rewind:true,
    margin:30,
    dots:true,
    dotsSpeed:300,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:4000, // 4 seconds
    autoplaySpeed:300 // 0.3 seconds
  });

  /*===============================================
    Contact Form
  ===============================================*/
  $("#contactform").on('submit',function(e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if (name == '') {
      $("#name").css('background-color','rgba(255, 0, 0, 0.1)');
    }
    if (email == '') {
      $("#email").css('background-color','rgba(255, 0, 0, 0.1)');
    }
    if (message == '') {
      $("#message").css('background-color','rgba(255, 0, 0, 0.1)');
    }
    else {
      $.ajax({
        url:'contact_form.php',
        data:$(this).serialize(),
        type:'POST',
        success:function(data){
          $("#success").show().fadeIn(1000); //=== Show Success Message==
          $('#contactform').each(function(){
            this.reset();
          });
        },
        error:function(data){
          $("#error").show().fadeIn(1000); //===Show Error Message====
        }
      });
    }
    e.preventDefault();
  });


});