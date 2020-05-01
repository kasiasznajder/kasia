$(".next").click(function () {
  var total_slides = $(".slider>.slide").length,
    current_slide = $(".slider>.slide.show"),
    current_position = $(current_slide).index() + 1,
    first_slide = $(".slider>.slide").first(),
    slide_plus = $(current_slide).next(),
    next_slide = current_position == total_slides ? first_slide : slide_plus;

  current_slide.removeClass("show");
  next_slide.addClass("show");

  console.log("show");
});

$(".prev").click(function () {
  var total_slides = $(".slider>.slide").length,
    current_slide = $(".slider>.slide.show"),
    current_position = $(current_slide).index() + 1,
    last_slide = $(".slider>.slide").last(),
    slide_minus = $(current_slide).prev(),
    prev_slide = current_position == 1 ? last_slide : slide_minus;

  current_slide.removeClass("show");
  prev_slide.addClass("show");

  console.log(total_slides);
});

$(function () {
  var size = ["380px", "340px", "250px", "310px", "400px"];

  $("img").each(function () { 
    $(this).css({
      "height": size[Math.floor(Math.random() * size.length)]
    });
  });
});

function changeColor() {
  var colors = ["#177308", "#177308", "#4D6749", "#498C20", "#146D06", "#57C614"];

  $("a").each(function () { 
    $(this).css({
      transition: 'color 5s ease-in-out',
      "color": colors[Math.floor(Math.random() * colors.length)]
    });
  });
}

window.onload = changeColor;
var myVar = setInterval(changeColor, 5000);
