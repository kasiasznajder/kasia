$(document).ready(function () {
  wrapChars();
  // resize();
  changeColor();
  imageExpander();

  // function resize() {
  //   var size = ["380px", "340px", "250px", "310px", "400px"];

  //   $("img").each(function () {
  //     $(this).css({
  //       height: size[Math.floor(Math.random() * size.length)],
  //     });
  //   });
  // }

  function wrapChars() {
    var letter = $("a, span, h1, .foot, .caption").contents();

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
    ]

    var colorsTwo = [
      "#F2AA3C",
      "#739B80",
      "#DFA2B9",
      "#B83D35",
      "#152E73",
      "#593434",
    ];

    var colorsThree = [
      "#A07272",
      "#738BCD",
      "#F87970",
      "#F0AEC7",
      "#93C3A3",
      "#FDCD84",
    ];

    var colorsFour = [
      "#247DE0",
      "#3686E0",
      "#4A91E0",
      "#65A2E5",
      "#86BEFC",
      "#C5DFFC",
    ];

    $("letter").each(function () {
      $(this).css({
        transition: "color 1400ms ease-in-out",
        color: colorsFour[Math.floor(Math.random() * colorsFour.length)],
      });
    });
  }

  var myVar = setInterval(changeColor, 700);

  function imageExpander() {
    var img = $(".img-wrap"),
        bg = $("body, .grid"),
        modal = $(".modal");
        

    img.click(function () {
      var lowRes = $(this).children('img').attr('src'),
          hiRes = lowRes.replace('low', 'high'),
          caption = $(this).children('p').text(),
          modal = $('<img class="expanded" src='+hiRes+'><p class="expanded">'+caption+'</p>').hide().fadeIn(100);

      bg.addClass("fade");
      $(".modal").addClass("expanded").append(modal);
    });

    modal.click(function () {
      bg.removeClass("fade");
      modal.removeClass("expanded");
      $("img, p").remove(".expanded");

    });
  };
});
