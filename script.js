// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCcYW61KHkiEwi4HdFO9oJWZ0lTGJUseqI",
  authDomain: "webtest-c7cb6.firebaseapp.com",
  projectId: "webtest-c7cb6",
  storageBucket: "webtest-c7cb6.appspot.com",
  messagingSenderId: "107131393871",
  appId: "1:107131393871:web:142b6418e34b2a0cc2173a",
  measurementId: "G-85JHER391N"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Get the form element
var form = document.getElementsByTagName('form')[0];

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input value
  var inputText = document.getElementById('input-text').value;

  // Push the input value to the database
  database.ref('text').push({
    text: inputText
  });

  // Reset the form input
  form.reset();
});

// Get a reference to the history div
var historyDiv = document.getElementById('history');

// Listen for changes to the database and update the history
database.ref('text').on('child_added', function(snapshot) {
  var data = snapshot.val();
  var outputString = '<p>' + data.text + '</p>';
  historyDiv.insertAdjacentHTML('afterbegin', outputString);
});