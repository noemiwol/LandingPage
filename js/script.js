$arrow.on("click", function() {
    $("body").animate({
      scrollTop: $("main").offset().top
    }, 1000);
  });