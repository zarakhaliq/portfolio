//Overlay:

$(document).ready(function () {
  $(".portfolio-overlay").hide();

  $(".overlay").fadeIn();
  $(".navbar-custom").css("background", "transparent");
  $(".fa-angle-down").click(function () {
    $(".navbar-custom").css("background", "black");
  });
});

//Smooth scrolling:

$("#sec-1").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#about").offset().top + 5,
    },
    1000
  );
  return false;
});
$("#sec-2").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#experience").offset().top - 5,
    },
    1000
  );
  return false;
});
$("#sec-3").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#work").offset().top - 5,
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

//Changing navbar transition from homepage:

jQuery(function ($) {
  $(window).scroll(function () {
    $(".navbar-custom").css("background", "black");
  });
});

//Portfolio/work overlays:

$(".wk1").hover(
  function () {
    $(".PO1").show();

    $(".1").show();
    $(".portfolio-img").css("z-index", "0");
    $(".work-info").css("z-index", "0");
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

    $(".2").show();
    $(".portfolio-img").css("z-index", "0");
    $(".work-info").css("z-index", "0");
  },
  function () {
    $(".PO2").hide();
    $(".2").hide();
    $(".portfolio-overlay").css("z-index", "0");
  }
);

$(".wk3").hover(
  function () {
    $(".PO3").show();

    $(".3").show();
    $(".portfolio-img").css("z-index", "0");
    $(".work-info").css("z-index", "0");
  },
  function () {
    $(".PO1").hide();
    $(".3").hide();
    $(".portfolio-overlay").css("z-index", "0");
  }
);

$(".wk4").hover(
  function () {
    $(".PO4").show();

    $(".4").show();
    $(".portfolio-img").css("z-index", "0");
    $(".work-info").css("z-index", "0");
  },
  function () {
    $(".PO1").hide();
    $(".4").hide();
    $(".portfolio-overlay").css("z-index", "0");
  }
);

$(".wk5").hover(
  function () {
    $(".PO5").show();

    $(".5").show();
    $(".portfolio-img").css("z-index", "0");
    $(".work-info").css("z-index", "0");
  },
  function () {
    $(".PO1").hide();
    $(".5").hide();
    $(".portfolio-overlay").css("z-index", "0");
  }
);
$(".wk6").hover(
  function () {
    $(".PO6").show();

    $(".6").show();
    $(".portfolio-img").css("z-index", "0");
    $(".work-info").css("z-index", "0");
  },
  function () {
    $(".PO6").hide();
    $(".6").hide();
    $(".portfolio-overlay").css("z-index", "0");
  }
);
$(".wk7").hover(
  function () {
    $(".PO7").show();

    $(".7").show();
    $(".portfolio-img").css("z-index", "0");
    $(".work-info").css("z-index", "0");
  },
  function () {
    $(".PO7").hide();
    $(".7").hide();
    $(".portfolio-overlay").css("z-index", "0");
  }
);
$(".wk8").hover(
  function () {
    $(".PO8").show();

    $(".8").show();
    $(".portfolio-img").css("z-index", "0");
    $(".work-info").css("z-index", "0");
  },
  function () {
    $(".PO8").hide();
    $(".8").hide();
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
$(".emailIcon").hover(function () {
  $(this).addClass("animate__animated animate__bounce");
});
//Close mobile nav when link is clicked:

$(".js-scroll-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});
