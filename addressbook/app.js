var express = require('express');
var app = express();

// Set up middleware, routes, etc.
app.get('/', function(req, res) {
  res.send('Hello World!');
});

var personsRouter = require('./routes/persons');  // Import the persons routes

app.use('/persons', personsRouter);  // Use the persons routes for any URL that starts with /persons

module.exports = app;  // Export the app object
