var Sequelize = require('sequelize');

//Setting up the config
var sequelize = new Sequelize('atlo', 'root', null , {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});


//Checking connection status
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully');
})
.catch(err => {
    console.log('There is connection in ERROR', err);
});
var org_unit = sequelize.define('organization_unit', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
   name: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.INTEGER,
    phone1: Sequelize.INTEGER,
    phone2: Sequelize.INTEGER,
    email: Sequelize.STRING
});

sequelize.sync({force:false}).then(() => {
  console.log('Organization table created successfully');
})
.catch(err => {
  console.log('An error occur while creating table',err);
 }
);

module.exports=org_unit;