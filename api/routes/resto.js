var express = require('express');
var router = express.Router();
var Resto = require('../model/restaurent');
var RestoSave = require('../model/restosave');
const mongoose = require('mongoose');


var data = {
    'message' : "Ok",
    'status':200,
    'data':[]
};

router.get('/:id', async function(req, res) {
  var json = {'_id' : mongoose.Types.ObjectId(req.params.id)};
  console.log(json);
  const dataUsers = await Resto.find(json);
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

router.delete('/:id', async function(req, res) {
  var json = {'_id' : mongoose.Types.ObjectId(req.params.id)};
  const dataUsers = await Resto.deleteOne(json);
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

router.get('/', async function(req, res) {

  const dataUsers = await Resto.find();
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

router.post('/', async function(req, res) {
  var json = req.body;
  var rest = new RestoSave(json);
  console.log(json);
  const dataUsers = await rest.save(json);
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
