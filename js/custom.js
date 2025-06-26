(function ($) {
  "use strict";

  // MENU
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // CUSTOM LINK
  $(".smoothscroll, .click-scroll").click(function (e) {
    var el = $(this).attr("href");
    var elWrapped = $(el);
    var header_height = $(".navbar").height();

    scrollToDiv(elWrapped, header_height);
    e.preventDefault();

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $("html, body").animate(
        {
          scrollTop: totalScroll
        },
        300
      );
    }
  });

  // TOP BANNER HIDE ON SCROLL
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 10) {
      $("body").addClass("banner-hidden");
    } else {
      $("body").removeClass("banner-hidden");
    }
  });
})(window.jQuery);


