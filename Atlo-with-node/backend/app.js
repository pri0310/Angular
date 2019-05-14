const express = require('express');
const bodyParser = require('body-parser');
// const expressJwt = require('express-jwt');
const routes = require('./routes/orgroutes');

//Calling Constructors
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CORS
app.use((req, res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

//API Calling via routing
app.use('/api', routes);

module.exports = app;
