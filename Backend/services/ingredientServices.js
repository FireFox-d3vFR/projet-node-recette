const Ingredient = require("../models/ingredient");
const IngredientRecipe = require("../models/ingredientRecette");

// Récupérer la liste des ingrédients
const getIngredients = async () => {
    return Ingredient.find();
};

// Récupérer un ingrédient suivant son id
const getIngredient = async (id) => {
    return Ingredient.findById(id);
};

// Créer un ingrédient
const createIngredient = async (ingredientData) => {
    const ingredient = new Ingredient(ingredientData);
    return ingredient.save();
};

// Mettre à jour un ingrédient
const updateIngredient = async (id, ingredientData) => {
    return Ingredient.findByIdAndUpdate(id, ingredientData, { new: true });
};

// Supprimer un ingrédient
const deleteIngredient = async (id) => {
    return Ingredient.findByIdAndDelete(id);
};

// Supprimer la liste d'ingrédient
const deleteIngredients = async (query) => {
    return await Ingredient.deleteMany(query);
};

// Ajouter un ingrédient à une recette
const addIngredientToRecipe = async (ingredientRecipeData) => {
    const ingredientRecipe = new IngredientRecipe(ingredientRecipeData);
    return ingredientRecipe.save();
};

module.exports = {
    getIngredient,
    getIngredients,
    createIngredient,
    updateIngredient,
    deleteIngredient,
    deleteIngredients,
    addIngredientToRecipe
};
