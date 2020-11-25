//Overlay:

$(document).ready(function () {
  //$(".overlay").hide();
  $(".portfolio-overlay").hide();
  //  setTimeout(function () {
  $(".overlay").fadeIn();
  $(".navbar-custom").css("background", "transparent");
  $(".fa-angle-down").click(function () {
    $(".navbar-custom").css("background", "black");
  });
});

//Smooth scrolling:

//$("#sec-1").addClass("active");
$("#sec-1").click(function () {
  // $(".nav").find(".active").removeClass("active");
  //$("#sec-1").addClass("active");
  $("html, body").animate(
    {
      scrollTop: $("#about").offset().top + 5,
    },
    1000
  );
  return false;
});
$("#sec-2").click(function () {
  //$("#sec-1").removeClass("active");
  //$("#sec-2").addClass("active");
  $("html, body").animate(
    {
      scrollTop: $("#experience").offset().top + 5,
    },
    1000
  );
  return false;
});
$("#sec-3").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#work").offset().top + 5,
    },
    1000
  );
  return false;
});
$("#sec-4").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#contact").offset().top,
    },
    1000
  );
  return false;
});

//Avtive links:
//$(".nav .nav-link").on("click", function () {
//$(".nav").find(".active").removeClass("active");
//$(this).addClass("active");
//});

//$("#scroll-bar");

//Changing navbar transition from homepage:

jQuery(function ($) {
  $(window).scroll(function () {
    //if ($(this).scrollTop() > 800) {
    $(".navbar-custom").css("background", "black");
    // } else {
    //  $(".navbar-custom").css("background", "transparent");
    //}
  });
});

//Portfolio/work overlays:

$(".wk1").hover(
  function () {
    $(".PO1").show();
    // $(".portfolio-overlay").hide();
    $(".1").show();
    $(".portfolio-img").css("z-index", "0");
    $(".work-info").css("z-index", "0");
    //console.log("mouseover!");
  },
  function () {
    $(".PO1").hide();
    $(".1").hide();
    $(".portfolio-overlay").css("z-index", "0");
  }
);
$(".wk2").hover(
  function () {
    $(".PO2").show();
    // $(".portfolio-overlay").hide();
    $(".2").show();
    $(".portfolio-img").css("z-index", "0");
    $(".work-info").css("z-index", "0");
    //console.log("mouseover!");
  },
  function () {
    $(".PO2").hide();
    $(".2").hide();
    $(".portfolio-overlay").css("z-index", "0");
  }
);
$(".skillsEffect").hover(function () {
  $(this).addClass("animate__animated animate__pulse");
});

$(".skillsEffect").bind(
  "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
  function () {
    $(this).removeClass("animate__animated animate__pulse");
  }
);
