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

// var addNewEvent = document.getElementById('addNewEvent');
// var timeline = document.getElementById('timeline');
// var monday = document.getElementById('dayZero');
// var tuesday = document.getElementById('dayOne');
// var wednesday = document.getElementById('dayTwo');
// var thursday = document.getElementById('dayThree');
// var friday = document.getElementById('dayFour');
// var saturday = document.getElementById('dayFive');
// var sunday = document.getElementById('daySix');
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

//render prototype
// Tater.prototype.render = function(){


//   for(var i = 0; i < allTots.length; i++){
//     if(allTots[i].moment._i[2] === dayNumber){
//       var newLi = document.createElement('li');
//       newLi.textContent = allTots[i].name;
//       monday.appendChild(newLi);
//     }
//   }




// };

//++++++++++++++++++++++++++++++
// FUNCTION DECLARATIONS
//++++++++++++++++++++++++++++++

// sort event array function
// function sortMoments(){
//   allTots.sort(function(a, b){
//     return a.moment._d - b.moment._d;
//   });
// }

// //store array function
// function setMoments(){
//   localStorage.setItem('allTots' , JSON.stringify(allTots));
// };

// //get array function
// function getMoments(){
//   var retrievedMoments = localStorage.getItem('allTots');
//   allTots = JSON.parse(retrievedMoments);
// };


// //render moments to page
// var renderMonday = function(dayNumber){
//   for(var i = 0; i < allTots.length; i++){
//     if(allTots[i].moment._i[2] === dayNumber){
//       var newLi = document.createElement('li');
//       newLi.textContent = allTots[i].name;
//       monday.appendChild(newLi);
//     }
//   }
// };

// var renderTuesday = (dayNumber) =>{
//   for(var i = 0; i < allTots.length; i++){
//     if(allTots[i].moment._i[2] === dayNumber){
//       var newLi = document.createElement('li');
//       newLi.textContent = allTots[i].name;
//       tuesday.appendChild(newLi);
//     }
//   }
// };

// var renderWednesday = (dayNumber) =>{
//   for(var i = 0; i < allTots.length; i++){
//     if(allTots[i].moment._i[2] === dayNumber){
//       var newLi = document.createElement('li');
//       newLi.textContent = allTots[i].name;
//       wednesday.appendChild(newLi);
//     }
//   }
// };

// var renderThursday = (dayNumber) =>{
//   for(var i = 0; i < allTots.length; i++){
//     if(allTots[i].moment._i[2] === dayNumber){
//       var newLi = document.createElement('li');
//       newLi.textContent = allTots[i].name;
//       thursday.appendChild(newLi);
//     }
//   }
// };

// var renderFriday = (dayNumber) =>{
//   for(var i = 0; i < allTots.length; i++){
//     if(allTots[i].moment._i[2] === dayNumber){
//       var newLi = document.createElement('li');
//       newLi.textContent = allTots[i].name;
//       friday.appendChild(newLi);
//     }
//   }
// };

// var renderSaturday = (dayNumber) =>{
//   for(var i = 0; i < allTots.length; i++){
//     if(allTots[i].moment._i[2] === dayNumber){
//       var newLi = document.createElement('li');
//       newLi.textContent = allTots[i].name;
//       saturday.appendChild(newLi);
//     }
//   }
// };

// var renderSunday = (dayNumber) =>{
//   for(var i = 0; i < allTots.length; i++){
//     if(allTots[i].moment._i[2] === dayNumber){
//       var newLi = document.createElement('li');
//       newLi.textContent = allTots[i].name;
//       sunday.appendChild(newLi);
//     }
//   }
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
//++++++++++++++++++++++++++++++
// INSTANCES
//++++++++++++++++++++++++++++++

var stateOne = () =>{
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
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 4, 23);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 5, 18);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 5, 2);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 5, 19);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 6, 7);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 6, 5);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 6, 2);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 6, 18);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 6, 12);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 7, 18);
  new Tater('jail' , 'do not pass go or collect $200' , 2018, 2, 7, 21);
  // sortMoments();
};

//++++++++++++++++++++++++++++++
// EVENT LISTENERS
//++++++++++++++++++++++++++++++

// form event listener
// addNewEvent.addEventListener('submit' , function(event) {
//   event.preventDefault();

//   var newYear = addNewEvent.elements[3].valueAsNumber;
//   var newMonth = addNewEvent.elements[4].valueAsNumber;
//   var newDay = addNewEvent.elements[5].valueAsNumber;
//   var newHour = addNewEvent.elements[6].valueAsNumber;

//   new Tater(addNewEvent.elements[1].value, addNewEvent.elements[2].value, newYear, newMonth, newDay, newHour);

//   sortMoments();
//   setMoments();

// });

//++++++++++++++++++++++++++++++
// EXECUTES ON PAGE LOAD
//++++++++++++++++++++++++++++++

stateOne();
// renderMonday(26);
// renderTuesday(27);
// renderWednesday(28);
// renderThursday(1);
// renderFriday(2);
// renderSaturday(3);
// renderSunday(4);

navClock();

