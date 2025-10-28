const db = require('../database.js');

// Syncing Sequelize models with the database (creating the tables)
db.sequelize.sync()
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });
