const mongoose = require("mongoose");

const recetteSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
  idCategory: {type: mongoose.Schema.Types.ObjectId, ref: 'Categorie', required: true},
  idMembre: {type: mongoose.Schema.Types.ObjectId, ref: 'Membre', required: true},
});

module.exports = mongoose.model("Recette", recetteSchema);
