const Sequelize = require('sequelize');

// Database connection
const sequelize = new Sequelize('addressbook', 'postgres', 'newpassword', {
  host: 'localhost',
  dialect: 'postgres',
  dialectOptions: {
    ssl: false // Set this to true only if using SSL with your database
  },
  logging: false // Optional: Disable logging
});


// Define the Person model (can be modified as needed)
const Person = sequelize.define('Person', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = {
  sequelize,
  Person
};
