
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});
var personsRouter = require('./routes/persons'); // Import the persons routes

// Use the persons routes for any URL that starts with /persons
app.use('/persons', personsRouter);

module.exports = app;
