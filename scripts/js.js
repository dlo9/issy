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

  function saveState() {
    var bookmarkNames = document.getElementsByClassName('bookmarkName');
    var bookmarkHrefs = document.getElementsByClassName('bookmarkHref');

    if (bookmarkNames.length != bookmarkHrefs.length) {
      return;
    }

    var state = [];
    for (var i = 0; i < bookmarkNames.length; i++) {
      state.push({
        name: bookmarkNames[i].value,
        href: bookmarkHrefs[i].value
      });
    }

    window.location.search = "?state=" + encodeURIComponent(JSON.stringify(state));
  }

  function getBookmarksFromUrl() {
    var urlParams = new URLSearchParams(window.location.search);
    return JSON.parse(decodeURIComponent(urlParams.get("state")));
  }

  function setBookmarksMenu(bookmarks) {
    if (!bookmarks) {
      return;
    }

    var menu = document.getElementById('bookmarks')
    for (var i = 0; i < bookmarks.length; i++) {
        var menuItem = document.createElement('li');

        var link = document.createElement('a');
        link.setAttribute('target', '_self');
        // TODO: Does this need sanitization?
        link.setAttribute('href', bookmarks[i].href);
        link.appendChild(document.createTextNode(bookmarks[i].name));
        menuItem.appendChild(link);

        menu.appendChild(menuItem);
    }
  }

  function addBookmark() {
    var form = document.getElementById('editForm');
    var name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('class', 'bookmarkName');
    name.setAttribute('placeholder', 'Name');
    var url = document.createElement('input');
    url.setAttribute('type', 'text');
    url.setAttribute('class', 'bookmarkHref');
    url.setAttribute('placeholder', 'URL');
    var br = document.createElement('br');
    form.prepend(name, '->', url, br)
  }

  function toggleEditFormVisibility() {
    var formStyle = document.getElementById('editForm').style;
    formStyle.display  = (formStyle.display == 'none') ? 'inline-block' : 'none';
  }

  setBookmarksMenu(getBookmarksFromUrl());
  document.getElementById('editSubmit').onclick = saveState;
  document.getElementById('addBookmark').onclick = addBookmark;
  document.getElementById('editButton').onclick = toggleEditFormVisibility;
  document.getElementById('editForm').style.display = 'none';
}
