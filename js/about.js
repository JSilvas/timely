'use strict';

// Create global variable for logout button.
var logoutButton = document.getElementById('logout');

//Clock function to keep track of time with date function.
function startClock(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML = h + ':' + m + ':' + s;
  var t = setTimeout(function(){ startClock();}, 500);
}
function checkTime(i) {
  if (i < 10) {i = '0' + i;}// add zero in front of numbers < 10
  return i;
}
startClock();

// Logout button.
function logoutHandler(event) {
  event.preventDefault();
  localStorage.removeItem('currentUser');
}

logoutButton.addEventListener('click', logoutHandler);
