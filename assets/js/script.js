wrapChars;
changeColor;

$(function () {
  var size = ["380px", "340px", "250px", "310px", "400px"];

  $("img").each(function () {
    $(this).css({
      height: size[Math.floor(Math.random() * size.length)],
    });
  });
});

function changeColor() {
  var colors = [
    "#177308",
    "#177308",
    "#4D6749",
    "#498C20",
    "#146D06",
    "#57C614",
  ];

  $("a").each(function () {
    $(this).css({
      transition: "color 5s ease-in-out",
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  });
}

function wrapChars() {
  console.log(nodeType);

  $("p, li")
    .children()
    .andSelf()
    .not(".no-paint")
    .contents()
    .each(function () {
      if (this.nodeType == 3) {
        var $this = $(this);
        $this.replaceWith($this.text().replace(/(\S)/g, "<letter>$&</letter>"));
      }
    });
}

var myVar = setInterval(changeColor, 5000);
