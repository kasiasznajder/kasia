$(document).ready(function () {

  wrapChars();
  resize();
  changeColor();

  
  function resize() {
    var size = ["380px", "340px", "250px", "310px", "400px"];

    $("img").each(function () {
      $(this).css({
        height: size[Math.floor(Math.random() * size.length)],
      });
    });
  };

  function wrapChars() {

    var letter = $("p, a").contents();

		letter.each(function(){
				console.log(letter);
				var $this = $(this);
				$this.replaceWith($this.text().replace(/(\S)/g, "<letter>$&</letter>"));
		});
	};

  function changeColor() {
    var colors = [
      "#177308",
      "#177308",
      "#4D6749",
      "#498C20",
      "#146D06",
      "#57C614",
    ];

    $("letter").each(function () {
      $(this).css({
        transition: "color 3s ease-in-out",
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    });
  };

  


  var myVar = setInterval(changeColor, 2000);

});
