'use strict';

//create an array to hold all users
User.allUsers = [];
//create variable to hold current user
User.currentUser = {name:'', password:''};
//create user constructor
function User(username, password){
  this.username = username;
  this.password = password;
  User.allUsers.push(this);
}

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