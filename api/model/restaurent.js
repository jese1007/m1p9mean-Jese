const mongoose = require("mongoose");

const RestaurentSchema = new mongoose.Schema({
    _id: {
      type: Object
    },
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

module.exports = mongoose.model("Restaurent", RestaurentSchema, "restaurent");
