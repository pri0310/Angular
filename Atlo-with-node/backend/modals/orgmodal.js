var sequelize = require('../config/connect.js');

var org_unit = sequelize.define('organization_unit', {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
     name: sequelize.STRING,
      address: sequelize.STRING,
      city: sequelize.STRING,
      state: sequelize.STRING,
      zip: sequelize.INTEGER,
      phone1: sequelize.INTEGER,
      phone2: sequelize.INTEGER,
      email: sequelize.STRING
  });

  sequelize.sync({force:false}).then(() => {
    console.log('Organization table created successfully');
  })
  .catch(err => {
    console.log('An error occur while creating table',err);
   }
  );

  module.exports = org_unit;