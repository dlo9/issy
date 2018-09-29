console.log('ayy' + ' ' + 'lmao');

window.onload = greeting;

function greeting() {

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function time() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    time()
  }, 500);
}
time();

var dateJS = new Date();
var hrs = dateJS.getHours();

	var greeting;

	if (hrs < 12)
	        greeting = 'Good Morning!';
	    else if (hrs >= 12 && hrs <= 17)
	        greeting = 'Good Afternoon!';
	    else if (hrs >= 17 && hrs <= 24)
	        greeting = 'Good Evening!';

	document.getElementById('greet').innerHTML =
	        greeting;

  function getBookmarks() {
    return [
      {
        name: "YT",
        href: "https://www.youtube.com/playlist?list=WL&disable_polymer=true"
      },
      {
        name: "Tweeter",
        href: "https://twitter.com"
      },
      {
        name: "Github",
        href: "https://github.com"
      },
      {
        name: "Userstyles",
        href: "https://userstyles.org"
      },
      {
        name: "DA",
        href: "http://deviantart.com"
      }
    ];
  }

  function setBookmarksMenu(bookmarks) {
    var menu = document.getElementById('bookmarks')
    for (var i = 0; i < bookmarks.length; i++) {
        var menuItem = document.createElement('li');

        var link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', bookmarks[i].href);
        link.appendChild(document.createTextNode(bookmarks[i].name));
        menuItem.appendChild(link);

        menu.appendChild(menuItem);
    }
  }

  setBookmarksMenu(getBookmarks());
}
