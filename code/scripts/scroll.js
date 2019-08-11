//variables for storing the top of the sections statically on page load
var section_top = new Array();
var scrollPosition;
var current_section = 0,
  new_section = 0;
var menuItems;
var mainMenuHeight;
var mouseY = 100;




//attach event handlers to right and left arrow keys for 'body'
//move menus to right and left on keydown
function menuMove(event) {
  if (window.event.keyCode == 37 /*left key*/ ||
    (window.event.keyCode == 32 && window.event.shiftKey) /*shift+spacebar*/ ) {
    if (current_section > 0) {
      current_section--;
      $('#menu' + current_section)[0].click();
    }
  } else if (window.event.keyCode == 39 /*right key*/ ||
    (window.event.keyCode == 32 && !window.event.shiftKey) /*spacebar*/ ) {
    if (current_section < menuItems.length-1) {
      current_section++;
      $('#menu' + current_section)[0].click();
    }
  }
}





//event handler for scroll attached to 'body'
//change the selected menu depending on the scroll height
function menuSelect() {
  scrollPosition = $(document).scrollTop();

  new_section = 0;
  menuItems.each(function(index, value) {
    if (scrollPosition > section_top[index] - 100) {
      new_section = index;
    }
  });

  if (new_section != current_section) {
    $("#menu" + current_section).removeClass("menuSelected");
    $("#menu" + new_section).addClass("menuSelected");
    current_section = new_section;
  }
}





//compute the tops of various divs
function computeTops() {
  menuItems = $(".menuItem").not(".unselectable");
  mainMenuHeight = $("#mainMenu").outerHeight();

  menuItems.each(function(index, value) {
    section_top[index] = $($(this).attr('href')).offset().top;
  });
  menuSelect();
}





/* When the user scrolls down, hide the menubar.
When the user scrolls up, show the menubar */
var prevScrollpos = window.pageYOffset;
function showHideMenu() {
  if(mouseY <= mainMenuHeight){
    document.getElementById("mainMenu").style.top = 0;
    return;
  }
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("mainMenu").style.top = 0;
  } else {
    document.getElementById("mainMenu").style.top = "-" + mainMenuHeight + "px";
  }
  prevScrollpos = currentScrollPos;
}


function updateMouseY(event){
  mouseY = event.clientY;
  if(mouseY <= mainMenuHeight){
    document.getElementById("mainMenu").style.top = 0;
    return;
  }
}


$(document).ready(function() {
  //add scroll animation to the internal links in the menubar
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    $target = $(this.hash);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 200, 'swing', function() {
      window.location = '#' + $target.attr('id');
    });
  });

  computeTops();
  window.addEventListener('resize', computeTops);
  window.addEventListener('orientationchange', computeTops);
  window.addEventListener('scroll', menuSelect);

  window.addEventListener('scroll', showHideMenu);
  $('body').on('mousemove', updateMouseY);

  $('body').on('keydown', menuMove);
});
