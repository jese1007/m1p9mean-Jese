const mongoose = require("mongoose");

const RestaurentSacveSchema = new mongoose.Schema({
    nom: {
      type: String,
      required: [true, "Le nom est obligatoire"]
    },
    id_users: {
      type: String,
      required: [true, "Le proprietaire est obligatoire"]
    },
    ville :{
      type: String,
      required: [true, "La ville est obligatoire"]
    } ,
    plats :{
      type: Object
    },
    etat :{
      type: Number
    }
});

module.exports = mongoose.model("RestoSave", RestaurentSacveSchema, "restaurent");
