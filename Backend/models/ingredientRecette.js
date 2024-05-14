const mongoose = require("mongoose");

const ingredientRecipeSchema = new mongoose.Schema({
    unit: {type: String, required: true},
    quantity: {type: Number, required: true},
    idRecipe: {type: mongoose.Schema.Types.ObjectId, ref: 'Recette', required: true},
    idIngredient: {type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient', required: true}
});

module.exports = mongoose.model('IngredientRecipe', ingredientRecipeSchema);
