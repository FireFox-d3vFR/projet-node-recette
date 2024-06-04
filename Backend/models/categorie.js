const mongoose = require("mongoose");

const categorieSchema = mongoose.Schema({
    name: {type: String, required: true},
    favoris: [{type: mongoose.Schema.Types.ObjectId, ref: 'Membre'}],
    nombre_de_favoris: {type: Number, default: 0}
});

module.exports = mongoose.model("Categorie", categorieSchema);
