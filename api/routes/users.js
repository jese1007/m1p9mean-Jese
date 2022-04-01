var express = require('express');
var router = express.Router();
var Users = require('../model/users.js');


/* GET users listing. */

// var conn = connect.getConn();
// var db = conn.db(process.env.DATABASE_NAME);
var data = {
    'message' : "Ok",
    'status':200,
    'data':[]
};
router.get('/', function(req, res, next) {
  var json = req.body;
  console.log();
  res.send('ok');
});

router.post('/', async function(req, res, next) {
  var json = req.body;
  console.log(json);
  Users.setMa
  const dataUsers = await Users.find(json);
  try {
    data.message="Ok";
    data.status=200;
    data.data=dataUsers;
  } catch (error) {
    data.message="error";
    data.status=500;
    data.data=error;
  }
res.send(data);
});


module.exports = router;
