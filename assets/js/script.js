$(document).ready(function () {
  wrapChars();
  // resize();
  changeColor();
  imageExpander();

  function resize() {
    var size = ["380px", "340px", "250px", "310px", "400px"];

    $("img").each(function () {
      $(this).css({
        height: size[Math.floor(Math.random() * size.length)],
      });
    });
  }

  function wrapChars() {
    var letter = $("a, p.caption, h1, .foot").contents();

    letter.each(function () {
      if (this.nodeType == 3) {
        var $this = $(this);
        $this.replaceWith($this.text().replace(/(\S)/g, "<letter>$&</letter>"));
      }
    });
  }

  function changeColor() {
    var colors = [
      "#177308",
      "#177308",
      "#4D6749",
      "#498C20",
      "#146D06",
      "#57C614",
    ];

    var colorsTwo = [
      "#F2AA3C",
      "#739B80",
      "#DFA2B9",
      "#B83D35",
      "#152E73",
      "#593434",
    ];

    $("a").each(function () {
      $(this).css({
        transition: "color 3s ease-in-out",
        color: colorsTwo[Math.floor(Math.random() * colorsTwo.length)],
      });
    });
  }

  var myVar = setInterval(changeColor, 2000);

  function imageExpander() {
    var img = $("img");
    bg = $("p, .img-wrap img, h1, body, ul");

    img.click(function () {
      bg.toggleClass("fade");
      $(this).toggleClass("expanded");
    });
  }
});
