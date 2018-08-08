//variables for storing the top of the sections statically on page load
var section_top_1, section_top_2, section_top_3, section_top_4, section_top_5;
var current_section = 1,
  new_section = 1;

$(document).ready(function() {
  //store the top of the sections
  section_top_1 = $("#itMe").offset().top;
  section_top_2 = $("#research").offset().top;
  section_top_3 = $("#funMaths").offset().top;
  section_top_4 = $("#unmaths").offset().top;
  section_top_5 = $("#notes").offset().top;

  //add scroll animation to the internal links in the menubar
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    $target = $(this.hash);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 500, 'swing', function() {});
  });
});

//event handler for scroll attached to 'body'
//change the selected menu depending on the scroll height
function menuSelect() {
  var scrollPosition = $(document).scrollTop();

  if (scrollPosition <= section_top_2 - 100) {
    new_section = 1;
  } else if (scrollPosition <= section_top_3 - 100) {
    new_section = 2;
  } else if (scrollPosition <= section_top_4 - 100) {
    new_section = 3;
  } else if (scrollPosition <= section_top_5 - 100) {
    new_section = 4;
  } else {
    new_section = 5;
  }
  if (new_section != current_section) {
    $("#menu" + current_section).removeClass("menuSelected");
    $("#menu" + new_section).addClass("menuSelected");
    current_section = new_section;
  }
}

//attach event handlers to right and left arrow keys for 'body'
//move menus to right and left on keydown
function menuMove() {
  if (window.event.keyCode == 37) {
    if (current_section > 1) {
      current_section--;
      $('#menu' + current_section)[0].click();
    }
  } else if (window.event.keyCode == 39) {
    if (current_section < 5) {
      current_section++;
      $('#menu' + current_section)[0].click();
    }
  }
}
