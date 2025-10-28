var express = require('express');
var router = express.Router();
var db = require('../database'); // Import the database setup

// Define the route to get all persons
router.get("/all", function(req, res) {
  db.Person.findAll()
    .then(persons => {
      res.status(200).json(persons); // Send the persons data as JSON
    })
    .catch(err => {
      console.error(err);  // Log any errors
      res.status(500).json({ error: 'An error occurred while retrieving data' });
    });
});

module.exports = router;
