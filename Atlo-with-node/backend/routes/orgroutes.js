var express = require('express');
var routes = express.Router();
var Buffer = require("buffer");  
const org_unit = require('../config/connect');


// console.log('"' + data + '" converted to Base64 is "' + base64data + '"');  

//Organization Data Insert
routes.post('/addorg' , (req,res) => {
    // console.log(req.body);
//     let data=req.body.orgPass
//     let buff = new Buffer(data);  
// let newpass = buff.toString('base64');

const organization = org_unit.build({
    name : req.body.orgName,
    address: req.body.orgAddress,
    city: req.body.orgCity,
    state: req.body.orgState,
    zip: req.body.orgZip,
    phone1: req.body.orgPhone1,
    phone2: req.body.orgPhone2,
    email: req.body.orgEmail,
    // password: newpass
  });
  const where = {email : req.body.orgEmail};
  console.log(where);
  org_unit.findAll({where}).then((response) =>{
    response= JSON.parse(JSON.stringify(response));
      if(response[0]){
        console.log("response2:", response);
        res.send ({
          message : 'Email Already exists'
        });
      }
      else
      {
        organization.save().then((result) => {    //Inserting Data into database
        res.send({message: 'Data successfully inserted',
        result : result,
        data : 1
      });
    })
  }
})
  .catch( (err) => {
    console.log('Error in Inserting Record',err);
  });
});

//View Oraganization
routes.get('/orgview', (req,res) => {
  org_unit.findAll({}).then(result => {
    data = JSON.parse(JSON.stringify(result));
    console.log(data);
    res.send( {data : data,
      message : "Data Send"
    });
  })
  .catch(err => {
    console.log('Error in Showing Records',err);
  })
});
module.exports = routes;