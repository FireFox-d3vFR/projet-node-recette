const mongoose = require("mongoose");

const commentaireSchema = mongoose.Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  note: { type: Number, required: true },
  creationDate: { type: Date, required: true },
  // idRecipe: {type: Int16Array, required: true},
});

module.exports = mongoose.model("Commentaire", commentaireSchema);
