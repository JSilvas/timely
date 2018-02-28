'use strict';
//++++++++++++++++++++++++++++++
// GLOBAL DATA
//++++++++++++++++++++++++++++++
// Initialize Quill editor
// var quill = new Quill('#editor', {
//   modules: { toolbar: true },
//   theme: 'snow'
// });

Tater.allTots = [];
Tater.daySlots = [[],[],[],[],[],[],[]];
var addEventForm = document.getElementById('addEvent');
var timeTable = document.getElementById('time-table');
var header = document.getElementById('header');

//++++++++++++++++++++++++++++++
// CONSTRUCTORS
//++++++++++++++++++++++++++++++
function Tater(name, details, year, month, day, hours){
  this.year = year;
  this.month = month;
  this.day = day;
  this.hours = hours;
  this.name= name;
  this.details = details;
  this.moment = moment([this.year, this.month, this.day, this.hours]);
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
      allDays[i].appendChild(liEl);
    }
  }
};

//++++++++++++++++++++++++++++++
// FUNCTION DECLARATIONS
//++++++++++++++++++++++++++++++
// Sort event array function
// function sortMoments(){
//   allTots.sort(function(a, b){
//     return a.moment._d - b.moment._d;
//   });
// }
// // Store array function
// function setMoments(){
//   localStorage.setItem('allTots' , JSON.stringify(allTots));
// };
// // Get array function
// function getMoments(){
//   var retrievedMoments = localStorage.getItem('allTots');
//   allTots = JSON.parse(retrievedMoments);
// };


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
  new Tater('gym' , '1v1 with Lebron James' , 2018, 2, 1, 18 );
  new Tater('gym' , 'all your base are belong to us' , 2018, 2, 2, 6);
  new Tater('van time' , 'nap down by the river' , 2018, 2, 2, 15 );
  new Tater('coffee' , 'go back and look for my phone' , 2018, 2, 3, 6);
  new Tater('find luca' , 'fish luca out of the river' , 2018, 2, 3, 18 );
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 3, 5);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 3, 9 );
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 3, 10);
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
  console.log('log of the event.target: ', event.target);
  if (!event.target.eventName.value || !event.target.year.value || !event.target.month.value || !event.target.day.value || !event.target.hours.value) {
    return alert('Please enter a name, date and hour.');
  }


  event.preventDefault();
  var name = event.target.eventName.value;
  var details = event.target.details.value;
  var year = event.target.year.valueAsNumber;
  var month = event.target.month.valueAsNumber;
  var day = event.target.day.valueAsNumber;
  var hours = event.target.hours.valueAsNumber;
  event.target.reset();
  // Constructor (name, details, year, month, day, hours)
  new Tater(name, details, year, month, day, hours);
  Tater.prototype.render();
}

//++++++++++++++++++++++++++++++
// EXECUTES ON PAGE LOAD
//++++++++++++++++++++++++++++++
makeTestEvents();
navClock();

addEventForm.addEventListener('submit' , addNewEvent);
