const db = require('./database');  // Import database setup

// Insert test data into the Person table
db.Person.create({
  firstName: 'John',
  lastName: 'Doe'
}).then(() => {
  console.log('Inserted John Doe');
}).catch(err => {
  console.error('Error inserting John Doe:', err);
});

db.Person.create({
  firstName: 'sam',
  lastName: 'altman'
}).then(() => {
  console.log('Inserted sam altman');
}).catch(err => {
  console.error('Error inserting sam altman:', err);
});
