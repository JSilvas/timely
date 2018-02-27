'use strict';
//GLOBAL VARS
var loginForm = document.getElementById('login-form');
//create an array to hold all users
User.allUsers = [];
//create variable to hold current user
User.currentUser = {name:'', password:''};
//create user constructor
checkStoredUsers();
function User(username, password){
  this.username = username;
  this.password = password;
  User.allUsers.push(this);
}
loginForm.addEventListener('submit', loginHandler);

function saveUserToLocal(){
  localStorage.setItem('allUsers', JSON.stringify(User.allUsers));
}

function saveCurrentUser() {
  localStorage.setItem('currentUser', JSON.stringify(User.currentUser));
}

function loginHandler(event) {
  event.preventDefault();
  var name = event.target.user.value;
  var password = event.target.password.value;
  User.currentUser.name = name.toLowerCase();
  //check if current user is in array of all users
  for(var i = 0; i < User.allUsers.length; i++){
    if(User.allUsers[i].username === name.toLowerCase() && User.allUsers[i].password === password){
      User.currentUser = User.allUsers[i];
      saveCurrentUser();
      break;
    }
  }
  if( i === User.allUsers.length){
    new User(name.toLowerCase(), password);
    event.target.reset();
    saveUserToLocal();
    saveCurrentUser();
  }
}
function checkStoredUsers(){
  if(localStorage.allUsers){
    var users = JSON.parse(localStorage.getItem('allUsers'));
    for(var i = 0; i < users.length; i ++){
      User.allUsers.push(users[i]);
    }
  }
  if(localStorage.currentUser){
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    User.currentUser = currentUser;
  }
}

//********************* */
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
//*********************** */