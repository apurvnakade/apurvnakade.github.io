$(document).ready(function() {
  $('.hasDescription').each(function() {
    // use $(this) to reference the current div in the loop
    $(this).on( "click", function() {
        $(this).css("display","none");
        $(this).next().css("height","auto");
        $(this).next().css("opacity","1");
        $(this).next().css("padding-left","1em");
        $(this).next().css("padding-bottom","1em");
});
});
});
