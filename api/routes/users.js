var express = require('express');
var router = express.Router();
var Users = require('../model/users.js');


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

router.post('/login', async function(req, res) {
  var json = req.body;
  console.log(json);
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

router.post('/', async function(req, res, next) {
  var json = req.body;
  console.log(json);
  Users.nom = json.nom;
  Users.prenom = json.prenom;
  Users.email = json.email;
  Users.mdp = json.mdp;
  Users.tel = json.tel;
  Users.ville = json.ville;
  Users.type = json.type;
  const dataUsers = await Users.Save();
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

router.put('/', async function(req, res, next) {
  var json = req.body;
  console.log(json);
  Users.nom = json.nom;
  Users.prenom = json.prenom;
  Users.email = json.email;
  Users.mdp = json.mdp;
  Users.tel = json.tel;
  Users.ville = json.ville;
  Users.type = json.type;
  const dataUsers = await Users.updateOne(json.id);
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

router.delete('/', async function(req, res, next) {
  var json = req.body;
  const dataUsers = await Users.deleteOne(json.id);
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
