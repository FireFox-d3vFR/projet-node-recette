const mongoose = require("mongoose");

const categorieSchema = mongoose.Schema({
    name: {type: String, required: true}
});

module.exports = mongoose.model("Categorie", categorieSchema);
