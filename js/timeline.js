'use strict'
//++++++++++++++++++++++++++++++
// GLOBAL DATA
//++++++++++++++++++++++++++++++
// Initialize Quill editor
var quill = new Quill('#editor', {  
  modules: { toolbar: true },
  theme: 'snow'
});

// var addEvent = document.getElementById('addNewEvent');
var allMoments = [];
var monday = document.getElementById('dayZero');
var tuesday = document.getElementById('dayOne');
var wednesday = document.getElementById('dayTwo');
var thursday = document.getElementById('dayThree');
var friday = document.getElementById('dayFour');
var saturday = document.getElementById('dayFive');
var sunday = document.getElementById('daySix');
//++++++++++++++++++++++++++++++
// CONSTRUCTORS
//++++++++++++++++++++++++++++++

var CreateEvent = function(name, details, year, month, day, hours){
  this.year = year;
  this.month = month;
  this.day = day;
  this.hours = hours;
  this.name= name;
  this.details = details;
  this.moment = moment([this.year, this.month, this.day, this.hours]);
  allMoments.push(this);
  
};

//++++++++++++++++++++++++++++++
// FUNCTION DECLARATIONS
//++++++++++++++++++++++++++++++

// sort event array function
var sortMoments = () =>{
  allMoments.sort(function(a, b){
    return a.moment._d - b.moment._d;
  });
};

//store array function
var setMoments = () =>{
  localStorage.setItem('allMoments' , JSON.stringify(allMoments));
};

//get array function
var getMoments = () =>{
  var retrievedMoments = localStorage.getItem('allMoments');
  allMoments = JSON.parse(retrievedMoments);
};

//render moments to page
var renderMonday = (dayNumber) =>{
  for(var i = 0; i < allMoments.length; i++){
    if(allMoments[i].moment._i[2] === dayNumber){
      var newLi = document.createElement('li');
      newLi.textContent = allMoments[i].name;
      monday.appendChild(newLi);
    }
  }
};

var renderTuesday = (dayNumber) =>{
  for(var i = 0; i < allMoments.length; i++){
    if(allMoments[i].moment._i[2] === dayNumber){
      var newLi = document.createElement('li');
      newLi.textContent = allMoments[i].name;
      tuesday.appendChild(newLi);
    }
  }
};

var renderWednesday = (dayNumber) =>{
  for(var i = 0; i < allMoments.length; i++){
    if(allMoments[i].moment._i[2] === dayNumber){
      var newLi = document.createElement('li');
      newLi.textContent = allMoments[i].name;
      wednesday.appendChild(newLi);
    }
  }
};

var renderThursday = (dayNumber) =>{
  for(var i = 0; i < allMoments.length; i++){
    if(allMoments[i].moment._i[2] === dayNumber){
      var newLi = document.createElement('li');
      newLi.textContent = allMoments[i].name;
      thursday.appendChild(newLi);
    }
  }
};

var renderFriday = (dayNumber) =>{
  for(var i = 0; i < allMoments.length; i++){
    if(allMoments[i].moment._i[2] === dayNumber){
      var newLi = document.createElement('li');
      newLi.textContent = allMoments[i].name;
      friday.appendChild(newLi);
    }
  }
};

var renderSaturday = (dayNumber) =>{
  for(var i = 0; i < allMoments.length; i++){
    if(allMoments[i].moment._i[2] === dayNumber){
      var newLi = document.createElement('li');
      newLi.textContent = allMoments[i].name;
      saturday.appendChild(newLi);
    }
  }
};

var renderSunday = (dayNumber) =>{
  for(var i = 0; i < allMoments.length; i++){
    if(allMoments[i].moment._i[2] === dayNumber){
      var newLi = document.createElement('li');
      newLi.textContent = allMoments[i].name;
      sunday.appendChild(newLi);
    }
  }
};

//++++++++++++++++++++++++++++++
// INSTANCES
//++++++++++++++++++++++++++++++
var stateOne = () =>{
  var newMoment1 = new CreateEvent('van time' , 'down by the river' , 2018, 1, 26, 4 );
  var newMoment2 = new CreateEvent('meet luca' , 'give luca the cement shoes so he can swim with the fishes' , 2018, 1, 26, 12);
  var newMoment3 = new CreateEvent('gym' , '1v1 with Lebron James' , 2018, 1, 26, 18 );
  var newMoment4 = new CreateEvent('gym' , 'all your base are belong to us' , 2018, 1, 27, 6);
  var newMoment5 = new CreateEvent('van time' , 'nap down by the river' , 2018, 1, 27, 15 );
  var newMoment6 = new CreateEvent('coffee' , 'go back and look for my phone' , 2018, 1, 28, 6);
  var newMoment7 = new CreateEvent('find luca' , 'fish luca out of the river' , 2018, 1, 28, 18 );
  var newMoment8 = new CreateEvent('jail' , 'do not pass go or collect $200' , 2018, 2, 1, 5);
  var newMoment9 = new CreateEvent('jail' , 'do not pass go or collect $200' , 2018, 2, 1, 9 );
  var newMoment10 = new CreateEvent('jail' , 'do not pass go or collect $200' , 2018, 2, 1, 10);
  var newMoment11 = new CreateEvent('jail' , 'do not pass go or collect $200' , 2018, 2, 1, 3 );
  var newMoment12 = new CreateEvent('jail' , 'do not pass go or collect $200' , 2018, 2, 1, 23);
  var newMoment13 = new CreateEvent('jail' , 'do not pass go or collect $200' , 2018, 2, 2, 18);
  var newMoment14 = new CreateEvent('jail' , 'do not pass go or collect $200' , 2018, 2, 2, 2);
  var newMoment15 = new CreateEvent('jail' , 'do not pass go or collect $200' , 2018, 2, 2, 19);
  var newMoment16 = new CreateEvent('jail' , 'do not pass go or collect $200' , 2018, 2, 2, 7);
  var newMoment17 = new CreateEvent('jail' , 'do not pass go or collect $200' , 2018, 2, 2, 5);
  var newMoment18 = new CreateEvent('jail' , 'do not pass go or collect $200' , 2018, 2, 3, 2);
  var newMoment19 = new CreateEvent('jail' , 'do not pass go or collect $200' , 2018, 2, 3, 18);
  var newMoment20 = new CreateEvent('jail' , 'do not pass go or collect $200' , 2018, 2, 4, 12);
  var newMoment21 = new CreateEvent('jail' , 'do not pass go or collect $200' , 2018, 2, 4, 18);
  var newMoment22 = new CreateEvent('jail' , 'do not pass go or collect $200' , 2018, 2, 4, 21);
  sortMoments();
};

//++++++++++++++++++++++++++++++
// EVENT LISTENERS
//++++++++++++++++++++++++++++++

//form event listener
// addEvent.addEventListener('submit' , function(event) {
//   event.preventDefault();

//   var newYear = addEvent.elements[3].valueAsNumber;
//   var newMonth = addEvent.elements[4].valueAsNumber;
//   var newDay = addEvent.elements[5].valueAsNumber;
//   var newHour = addEvent.elements[6].valueAsNumber;

//   createEvent(addEvent.elements[1].value, addEvent.elements[2].value, {year: newYear, month: newMonth, day: newDay, hour: newHour});
//   sortMoments();
//   storeMoments();
// });

//++++++++++++++++++++++++++++++
// EXECUTES ON PAGE LOAD
//++++++++++++++++++++++++++++++
stateOne();
renderMonday(26);
renderTuesday(27);
renderWednesday(28);
renderThursday(1);
renderFriday(2);
renderSaturday(3);
renderSunday(4);