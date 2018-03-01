'use strict';
//GLOBAL VARS
var loginForm = document.getElementById('login-form');//grabbing form from index
var 
//create an array to hold all users
User.allUsers = [];
//create variable to hold current user
var currentUser = '';

//user constructor
function User(username, password){
  this.username = username;
  this.password = password;
  User.allUsers.push(this);
}

//saves the array of all users to LS
function saveUserToLocal(){
  localStorage.setItem('allUsers', JSON.stringify(User.allUsers));
}
//saves current User to LS
function saveCurrentUser() {
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
}
//Handler to git user from LS if in, or create new user and add to array if not.
function loginHandler(event) {
  event.preventDefault();
  var name = event.target.user.value;
  var password = event.target.password.value;
  currentUser = name.toLowerCase();
  //check if current user is in array of all users
  for(var i = 0; i < User.allUsers.length; i++){//if statement to check if password matches user.
    if(User.allUsers[i].username === name.toLowerCase() && User.allUsers[i].password !== password){
      alert('The Password does not match with UserName');
      event.target.reset();
      break;
    }
    if(User.allUsers[i].username === name.toLowerCase() && User.allUsers[i].password === password){
      currentUser = User.allUsers[i].username;
      event.target.reset();
      saveCurrentUser();
      goToTimeline();
      break;
    }
  }//if current user is not in array make a new user and add to User array.
  if( i === User.allUsers.length){
    new User(name.toLowerCase(), password);
    event.target.reset();
    saveUserToLocal();
    saveCurrentUser();
    goToTimeline();
  }
}
//checks local storage for users
function checkStoredUsers(){
  if(localStorage.allUsers){
    var users = JSON.parse(localStorage.getItem('allUsers'));
    for(var i = 0; i < users.length; i ++){
      User.allUsers.push(users[i]);
    }
  }//if current user is logged in will kick them to timeline.html
  if(localStorage.currentUser){
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    User.currentUser = currentUser;
    goToTimeline();
  }
}
//go to timeline.html function.
function goToTimeline(){
  window.location = 'timeline.html';
}
//********************* */
//Clock function to keep track of time with date function.
function navClock(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML = h + ':' + m + ':' + s;
  var t = setTimeout(function(){ navClock();}, 500);
}
function checkTime(i) {
  if (i < 10) {i = '0' + i;}// add zero in front of numbers < 10
  return i;
}
navClock();
//*********************** */
checkStoredUsers();
loginForm.addEventListener('submit', loginHandler);
