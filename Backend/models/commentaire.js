const mongoose = require("mongoose");

const commentaireSchema = mongoose.Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  note: { type: Number, required: true },
  creationDate: { type: Date, default: Date.now },
  idRecipe: {type: mongoose.Schema.Types.ObjectId, ref: 'Recette', required: true}
});

module.exports = mongoose.model("Commentaire", commentaireSchema);
