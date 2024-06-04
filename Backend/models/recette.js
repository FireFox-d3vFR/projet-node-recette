const mongoose = require("mongoose");

const recetteSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, required: true },
  ingredients: {type: mongoose.Schema.Types.ObjectId, ref: 'IngredientRecipe'},
  favoris: {type: Boolean, default: false},
  nombre_de_favoris: {type: Number, default: 0},
  idCategory: {type: mongoose.Schema.Types.ObjectId, ref: 'Categorie', required: true},
  idMembre: {type: mongoose.Schema.Types.ObjectId, ref: 'Membre', required: true},
  creationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Recette", recetteSchema);
