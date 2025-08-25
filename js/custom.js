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
          scrollTop: totalScroll,
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

// Dynamically set top padding for sections to avoid overlapping with navbar
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const offsetElements = document.querySelectorAll(
    ".section-with-navbar-offset"
  );

  if (navbar) {
    const navbarHeight = navbar.offsetHeight;
    offsetElements.forEach((el) => {
      el.style.paddingTop = navbarHeight + "px";
    });
  }
});

// $(document).ready(function () {
//   const $navbar = $(".navbar");

//   // Get height of top-info-bar (or default to 48 if missing)
//   const topInfoHeight =
//     document.getElementById("top-info-bar")?.offsetHeight || 48;

//   // Initialize sticky with dynamic topSpacing
//   $navbar.sticky({
//     topSpacing: topInfoHeight,
//   });

//   // Optionally: on window resize, update sticky spacing if needed
//   $(window).on("resize", function () {
//     const updatedTop =
//       document.getElementById("top-info-bar")?.offsetHeight || 48;
//     $(".sticky-wrapper").css("top", updatedTop + "px");
//   });
// });
