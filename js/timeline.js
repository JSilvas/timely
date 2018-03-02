'use strict';
//++++++++++++++++++++++++++++++
// GLOBAL DATA
//++++++++++++++++++++++++++++++
// Initialize Quill editor
// var quill = new Quill('#editor', {
//   modules: { toolbar: true },
//   theme: 'snow'
// });
if(!localStorage.currentUser){
  window.location = 'index.html';
}

Tater.allTots = [];
Tater.daySlots = [[],[],[],[],[],[],[]];
var addEventForm = document.getElementById('addEvent');
var timeTable = document.getElementById('time-table');
var currentUser = '';
// Create global variable for logout button.
var logoutButton = document.getElementById('logout');

// var header = document.getElementById('header');

//++++++++++++++++++++++++++++++
// CONSTRUCTORS
//++++++++++++++++++++++++++++++
function Tater(name, details, year, month, day, hours){
  this.name = name;
  this.details = details;
  this.year = year;
  this.month = month;
  this.day = day;
  this.hours = hours;
  this.moment = moment([this.year, this.month, this.day, this.hours]);
  this.moment = new Date(this.moment._d);
  this.index = [];
  this.sortTaters();
}
//++++++++++++++++++++++++++++++
// PROTOTYPE METHODS
//++++++++++++++++++++++++++++++
Tater.prototype.sortTaters = function() {
  console.log(this);
  for (var i = 1; i < 8; i++) {
    if (this.day === i) {
      Tater.daySlots[(i - 1)].push(this);
      return;
    }
    console.log('I added an event to ' + this.day);
  }
};
Tater.prototype.render = function() { // Render prototype
  var d0 = document.getElementById('day0');
  var d1 = document.getElementById('day1');
  var d2 = document.getElementById('day2');
  var d3 = document.getElementById('day3');
  var d4 = document.getElementById('day4');
  var d5 = document.getElementById('day5');
  var d6 = document.getElementById('day6');
  var allDays = [d0,d1,d2,d3,d4,d5,d6];

  for(var i = 0; i < Tater.daySlots.length; i++) {
    allDays[i].innerHTML = '';
    for (var j = 0; j < Tater.daySlots[i].length; j++) {
      var liEl = document.createElement('li');

      var listHour = Tater.daySlots[i][j].hours;
      switch(listHour){
      case 0:
        listHour = '12:00 AM';
        break;
      case 1:
        listHour = '1:00 AM';
        break;
      case 2:
        listHour = '2:00 AM';
        break;
      case 3:
        listHour = '3:00 AM';
        break;
      case 4:
        listHour = '4:00 AM';
        break;
      case 5:
        listHour = '5:00 AM';
        break;
      case 6:
        listHour = '6:00 AM';
        break;
      case 7:
        listHour = '7:00 AM';
        break;
      case 8:
        listHour = '8:00 AM';
        break;
      case 9:
        listHour = '9:00 AM';
        break;
      case 10:
        listHour = '10:00 AM';
        break;
      case 11:
        listHour = '11:00 AM';
        break;
      case 12:
        listHour = '12:00 PM';
        break;
      case 13:
        listHour = '1:00 PM';
        break;
      case 14:
        listHour = '2:00 PM';
        break;
      case 15:
        listHour = '3:00 PM';
        break;
      case 16:
        listHour = '4:00 PM';
        break;
      case 17:
        listHour = '5:00 PM';
        break;
      case 18:
        listHour = '6:00 PM';
        break;
      case 19:
        listHour = '7:00 PM';
        break;
      case 20:
        listHour = '8:00 PM';
        break;
      case 21:
        listHour = '9:00 PM';
        break;
      case 22: 
        listHour = '10:00 PM';
        break;
      case 23:
        listHour = '11:00 PM';
        break;
      default:
        listHour = '';
        break;
      }
      liEl.innerHTML = Tater.daySlots[i][j].name + '</br>' + listHour; 
      var ijIndex = [i, j];
      Tater.daySlots[i][j].index = ijIndex;
      liEl.id = Tater.daySlots[i][j].index;
      allDays[i].appendChild(liEl);

      liEl = document.createElement('p');
      liEl.textContent = Tater.daySlots[i][j].details;
      allDays[i].appendChild(liEl);

    }
  }
};

//++++++++++++++++++++++++++++++
// FUNCTION DECLARATIONS
//++++++++++++++++++++++++++++++
// Sort event array function
function sortTaters(){
  for(var i = 0; i < Tater.daySlots.length; i++) {
    for (var j = 0; j < Tater.daySlots[i].length; j++) {
      
      Tater.daySlots[i].sort(function(a, b){
        return a.moment- b.moment;
      });
    }
  }
}

// Store array function
function setTaters(){
  localStorage.setItem(currentUser , JSON.stringify(Tater.daySlots));
}

// // Get array function
function getTaters(){
  if(gotTaters){
    var gotTaters = localStorage.getItem('allTots');
    Tater.daySlots = JSON.parse(gotTaters);
  }
  var thisUser = localStorage.getItem('currentUser');
  currentUser = JSON.parse(thisUser);
}

function getUserTaters(){
  getTaters();
  for(var i = 0; i < localStorage.length; i++){
    if(localStorage.key(i) === currentUser){
      var myTaters = localStorage.getItem(currentUser);
      Tater.daySlots = JSON.parse(myTaters);
      for(var j = 0; j < Tater.daySlots.length; j++){
        for(var k = 0; k < Tater.daySlots[j].length; k++){
         
          var blahBlah = Tater.daySlots[j][k].moment;
       
          Tater.daySlots[j][k].moment = new Date (blahBlah);
         
          sortTaters();
          Tater.prototype.render();
        }
      }
    }
  }
}

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
function makeTestEvents() {
  new Tater('van time' , 'down by the river' , 2018, 3, 1, 4 );
  new Tater('meet luca' , 'give luca the cement shoes so he can swim with the fishes' , 2018, 3, 1, 12);
  new Tater('gym' , 'all your base are belong to us' , 2018, .3, 2, 6);
  new Tater('coffee' , 'go back and look for my phone' , 2018, 3, 3, 6);
  new Tater('find luca' , 'fish luca out of the river' , 2018, 3, 4, 18 );
  new Tater('Shopping' , 'Need to pick up food for week, don\'t forget the milk!!' , 2018, 3, 3, 5);
  new Tater('Walk' , 'Make sure to walk the Dog at 9' , 2018, 3, 3, 9 );
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 3, 4, 3 );
  new Tater('Feed Demi' , 'Make sure pupper is fed' , 2018, 3, 4, 23);
  new Tater('Walk Doggo' , 'Take Demi-Dog for walk in the park' , 2018, 3, 6, 2);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 3, 6, 18);
  sortTaters();
  Tater.prototype.render();
}

//++++++++++++++++++++++++++++++
// INSTANCES
//++++++++++++++++++++++++++++++

// Form event listener

function addNewEvent(event) {
  event.preventDefault();

  if (!event.target.eventName.value || !event.target.year.value || !event.target.month.value || !event.target.day.value || !event.target.hours.value) {
    return alert('Please enter a name, date, and hour.');
  }

  var name = event.target.eventName.value;
  var details = event.target.details.value;
  var year = parseInt(addEventForm.elements[3].value);
  var month = parseInt(addEventForm.elements[4].value);
  var day = parseInt(addEventForm.elements[5].value);
  var hours = parseInt(addEventForm.elements[6].value);
  event.target.reset();

  new Tater(name, details, year, month, day, hours);
  sortTaters();
  Tater.prototype.render();
  setTaters();
}

//++++++++++++++++++++++++++++++
// EXECUTES ON PAGE LOAD
//++++++++++++++++++++++++++++++
makeTestEvents();
getUserTaters();
navClock();

addEventForm.addEventListener('submit' , addNewEvent);

timeTable.addEventListener('click' , function(event){
  if(event.target.tagName === 'LI'){
    var allP = document.querySelectorAll('table p');
    for(var i= 0; i < allP.length; i++){
      allP[i].style.display = 'none';
    }
    event.target.nextElementSibling.style.display = 'block';
  }
});

timeTable.addEventListener('mouseover' , function(event){
  if(event.target.tagName === 'LI'){
    event.target.style.backgroundColor = 'pink';
    setTimeout(function(){
      event.target.style.backgroundColor = 'white';
      event.target.style.color = 'black';
    }, 100);
  }
});

timeTable.addEventListener('dblclick', function(event){
  if(event.target.tagName === 'LI'){
    var removeMe = event.target;
    deleteMe(removeMe.id);
    removeMe.nextElementSibling.remove();
    removeMe.parentNode.removeChild(removeMe);

  }
  setTaters();
  getUserTaters();
});

function deleteMe(takeId){
  for(var i = 0; i < Tater.daySlots.length; i++) {
    for (var j = 0; j < Tater.daySlots[i].length; j++) {
      if(Tater.daySlots[i][j].index.toString() === takeId.toString()){
        return Tater.daySlots[[i][j]].splice(0, 1);
      }
    }
  }
}

// Logout button.
function logoutHandler(event) {
  event.preventDefault();
  localStorage.removeItem('currentUser');
  window.location = 'index.html';
}

logoutButton.addEventListener('click', logoutHandler);


function welcomeUser(){
  var myDate = new Date();
  var hrs = myDate.getHours();
  var greet;
  if (hrs < 12)
    greet = 'Good Morning';
  else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon';
  else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening';

  document.getElementById('greetings').innerHTML = greet + ' ' + currentUser.charAt(0).toUpperCase() + currentUser.slice(1) + ' and welcome to your Timely';
}
welcomeUser(); 