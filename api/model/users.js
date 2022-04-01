
const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    nom: {
      type: String,
      required: [true, "Le nom est obligatoire"]
    },
    prenom: {
      type: String,
      required: [true, "Le prénom est obligatoire"]
    },
    email :{
      type: String,
      required: [true, "L'email est obligatoire"]
    },
    mdp :{
      type: String,
      required: [true, "Le mots de passe est obligatoire"]
    } ,
    tel :{
      type: String,
      required: [true, "Le téléphone est obligatoire"]
    } ,
    ville :{
      type: String,
      required: [true, "La ville est obligatoire"]
    } ,
    type :{
      type: Number
    }
});

module.exports = mongoose.model("Users", UsersSchema, "users");
