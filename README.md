CodeTeam6 - Project Plan
Your team's name
* Code Team Six
Your team members
* Jay Silvas 
* Judah Hunger
* Amanda Moen 
* Jesse Atay 


Project Concept - Timeline
A visual timeline that helps you organize your events and tasks in a more intuitive manner than a traditional calendar.
Minimum Viable Product
Core Features:
* User sees landing page with explanation of Timeline site
* User logs in w/ name and password, kept in browser local storage
* Page redirects to timeline.html and creates new user array if !localStorage
* New timeline w/ example events is rendered,  or uses existing data from LS
* A # of slots for days in a span of time will be displayed horizontally in window
* User can create new event with specified date and time via text entry forms
* User can navigate to “About” page to see project team members & social media

Stretch Goals:
* Integrate moment.js to allow full calendar and time functionality
* Displaying stack of multiple events per day simultaneously in ‘Forecast” view
* Hidden right sidebar that displays additional information about upcoming events
   * Ex. Events tagged “Important” or Time left until deadline

User Stories:
As a user:
* As a user, I want to be able to login and have my timeline saved from previous setup.
* As a user, I want the site to remember me from previous visits with my login information.
* As a user, I want creating new events to be intuitive so that I can easily add them in my new timeline.
* As a user, I want to be able to view and navigate between created events so that I can view different parts of my schedule easily.
* As a user, I want to easily see how many events are on a particular day, so that I can adjust my focus accordingly.
* As a user I want to clearly see that I clicked on an element, so that I know the page is responding to my actions.
* As a user I want to clearly understand what I am supposed to do, so that I don’t end up frustrated.
* As a user I would like examples of how to use the timeline, so that I can quickly get started the first time I open the page.

As a developer:
* Create linked pages to include a landing page, main page, and about page.
* Manage local storage to save usernames and passwords between sessions.
* Manage local storage to save Timeline events for each user that are linked to their username and password.
* Create a intuitive UI and tutorial to assist users in starting new Timelines.
* Use Moment.js to create an array of indexed objects based on user input.
* Sort the master array so that the moment objects are sorted in chronological order.
* Render the timeline according to user selection.


Project Design Overview
Wireframes:
  
#Libraries Used.
Moment.js library used to help navigate through Dates and help create moments.
Google Fonts used to help make text more rich and user friendly.
Example of Appearance:
https://fonts.google.com/selection?selection.family=Istok+Web|Pacifico|Permanent+Marker
Implementation:
<link href="https://fonts.googleapis.com/css?family=Istok+Web|Pacifico|Permanent+Marker" rel="stylesheet">
CSS:
font-family: 'Pacifico', cursive;
font-family: 'Permanent Marker', cursive;
font-family: 'Istok Web', sans-serif;
Standard backup font:
font-family: 14px Helvetica Neue,Arial,Helvetica,sans-serif;

Project Domain Model

Problem Domain Evaluation
* Step One: Landing Page and User Creation
The problem domain begins with the user navigating to the landing page, where they will be presented the options to establish a username, or navigate to the “About” page. As a stretch goal, both the username and a password will be locally stored. We also feature a real-time digital clock on the landing page.

* Step Two: Timeline Initialized
The user then navigates to the Timeline page. If they are a new user, they will see an example timeline and explanation of how to create events and start their own timeline. If they are a returning user, locally stored data will return them to their last entered timeline, where they can view, create or edit events. 
Moment.js is the main library we are using in the creation of events. This library enables use of the JS to create, parse, validate, manipulate and display objects created with time stamps. We are using the minified JS file, which will be attached to our project via Content Delivery Network (CDN) in a script tag.

* New Event Creation
If the user elects to create a new event, we will use a constructor function that receives the user input and creates a new moment. All data will be pushed to a master array and sorted in chronological order. As part of the minimum viable product, the object array will be arranged with the indices corresponding to individual dates. As part of our stretch goal, the master array will include additional arrays of moment objects, which will allow the storage of multiple events per day rather than a single object.

* Add to/sort master array and storage
After a new event is created, the object will be pushed to the master array, then sorted via a comparative sort function according to chronological order. The user can continue creating as many events as they want, and each will be added to the master array, which will be placed in local storage.
* Event View/Rendering

Once a timeline is created, the user can then view each event. The cards containing each object will be displayed inline, in chronological order from left to right. Each card will be placed via HTML within <div> containers. Each container will also have class names and IDs for styling and DOM manipulation purposes. Different hover states will give a visual indicator of which card the user is currently focused on as the user mouses over each card. There will be 7 cards displayed at a time, corresponding with a week’s worth of events. The “focused” card will be the one that displays in the middle, with the ones to the left and right being taken from an index position of -3 to +3 in the array. This will require a selection and render functions, which will act on the objects stored in the master array.

* Event Selection
The selection function will use an event listener to identify the event target, i.e, which card the user clicked on. That will establish an index, with the render function iterating from -3 to +3 from the index and rendering those cards in order. The cards as presented to this point will be a “general” view, omitting the details until the user has selected a card to view.

* Detailed Event View
When the user has selected a card, the card will then expand into a “detailed” view. This detailed view will be managed with the Quill.js library. This is a library that allows simple text editing in forms, and will assist in the presentation of the detailed view. The detailed view will also include further data that has been collected from the input form and passed into the object for that event. The detailed view will include the name of the event the user has registered, the date and time, and a detail window for specifics composed of a scrolling overflow.

* Automatic Event Tracking
Once all the events have been created and stored, they will be compared against a current time/date stamp. This stamp will also occur each time the user logs back into her/his timeline, and render the initial presented elements in chronological order starting from the current day. So, days that have passed will be automatically moved out of view unless the user decides to scroll backwards through the timeline.

* Endstate
The endstate of our project is a visually-presented timeline, with event data drawn from user input and rendered on the page. The user can navigate the timeline to display different events by day, and receive notifications of pending or important events, with corresponding visual indicators. User data is created and stored through a username and password system, and subsequent visits to the page allow the user to bypass the landing page and return directly to their last known timeline.