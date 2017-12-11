/*
navbar.js
Javascript for creating a menu with id mainMenu.

Script is run before the page is completely loaded for greater speed.
Place the script inside body.

Sample output:

<table class="mainMenu" id="mainMenu"><tr>
  <td>
    <a href="./Research/index.html">Serious maths</a>
  </td>
  <td>
    <a href="index.html">Home</a>
  </td>
  <td>
    <a href="./notes/index.html">Math notes</a>
  </td>
  <td>
    <a href="leisure.html">Unmaths</a>
  </td>
</tr></table>

TODO: add elements as divs instead of strings
*/




// list of menu items
var names = ["Home", "Serious maths", "Unserious maths", "Math notes", "Unmaths", "Blog"];
var Urls = ["index.html", "research.html", "funmaths.html", "notes.html", "leisure.html", "blog/index.html"];

//url and index of the current page
var  myUrl    = location.pathname.split('/').slice(-1)[0];
var  myIndex  = Urls.indexOf(myUrl).toString();
var menuHTML  = "";

//extract html URL parameters
var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),sParameterName,i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
      }
  }
};

//function for creating mainMenu at the top of 'body'
var createMenu = function createMenu(order) {
  if(!order) {
    order = "012345".replace(myIndex,'')
  }
  else {
    var missingIndex = '';
    for (i = 0; i < Urls.length; i++) {
      if (order.indexOf(i.toString()) == -1) {
        missingIndex = i.toString();
      }
    }
    order = order.replace(myIndex,missingIndex)
  }

  for (i = 0; i < order.length; i++) {
        // <td><a href="research.html?m=12345">Serious maths</a></td>
        menuHTML += '<td><a href="' + Urls[order[i]] + '?m='+order+'">' + names[order[i]] + '</a></td>\n';
  }
  $('body').prepend('<table id="mainMenu"><tr>' + menuHTML + '</tr></table>');
  console.log(menuHTML);
}

createMenu(getUrlParameter('m'));
// $(document).ready(function(){
//
// });
