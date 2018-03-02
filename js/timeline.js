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

      liEl.textContent = Tater.daySlots[i][j].name; // + We need to show the time of each event as well
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
// function sortTaters(){
//   allTots.sort(function(a, b){
//     return a.moment._d - b.moment._d;
//   });
// }
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
  new Tater('van time' , 'down by the river' , 2018, 2, 1, 4 );
  new Tater('meet luca' , 'give luca the cement shoes so he can swim with the fishes' , 2018, 2, 1, 12);
  new Tater('gym' , 'all your base are belong to us' , 2018, 2, 2, 6);
  new Tater('coffee' , 'go back and look for my phone' , 2018, 2, 3, 6);
  new Tater('find luca' , 'fish luca out of the river' , 2018, 2, 3, 18 );
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 3, 5);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 3, 9 );
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 4, 3 );
  new Tater('Feed Demi' , 'Make sure pupper is fed' , 2018, 2, 4, 23);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 5, 18);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 5, 2);
  new Tater('jail' , 'Bail out Demi, she been a bad doggo' , 2018, 2, 5, 19);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 6, 7);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 6, 5);
  new Tater('Walk Doggo' , 'Take Demi-Dog for walk in the park' , 2018, 2, 6, 2);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 6, 18);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 6, 12);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 7, 18);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 7, 21);
  Tater.prototype.render();
}

//++++++++++++++++++++++++++++++
// INSTANCES
//++++++++++++++++++++++++++++++

// Form event listener

function addNewEvent(event) {
  event.preventDefault();
  console.log('log of the event.target: ', event.target);
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
  Tater.prototype.render();
  setTaters();
}

//++++++++++++++++++++++++++++++
// EXECUTES ON PAGE LOAD
//++++++++++++++++++++++++++++++
// makeTestEvents();
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