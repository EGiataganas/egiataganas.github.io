(function($) {
  "use strict"; // Start of use strict

  $(".element").each(function() {
    var $this = $(this);
    $this.typed({
      strings: $this.attr('data-elements').split(','),
      typeSpeed: 100,
      backDelay: 3000
    });
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($(window).scrollTop() > 100) {
      $("#mainNav").removeClass("navbar-transparent");
    } else {
      $("#mainNav").addClass("navbar-transparent");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Modal popup$(function () {
  $('.modal-item').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.modal-closing', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  jQuery(function($) {
    var form_action = $('#contactForm').attr('action');

      $('#contactForm').submit(function(ev) {
        ev.preventDefault();
        var subject = $('#subject').val(),
          body = $('#message').val();

        window.location.href = form_action + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      });
  });

})(jQuery); // End of use strict
