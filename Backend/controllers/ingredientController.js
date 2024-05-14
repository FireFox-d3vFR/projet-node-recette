const ingredientService = require("../services/ingredientServices");

const getIngredients = async (req, res) => {
    try {
        const ingredients = await ingredientService.getIngredients();
        res.status(200).json({ status: 200, data: ingredients, message: "Ingrédients récupérés avec succès" });
    } catch (e) {
        res.status(500).json({ status: 500, message: e.message });
    }
};

const getIngredient = async (req, res) => {
    try {
        const ingredient = await ingredientService.getIngredient(req.params.id);
        if (!ingredient) {
            return res.status(404).json({ status: 404, message: "Ingrédient non trouvé" });
        }
        res.status(200).json({ status: 200, data: ingredient, message: "Ingrédient récupéré avec succès" });
    } catch (e) {
        res.status(500).json({ status: 500, message: e.message });
    }
};

const createIngredient = async (req, res) => {
    try {
        const ingredient = await ingredientService.createIngredient(req.body);
        res.status(201).json({ status: 201, data: ingredient, message: "Ingrédient créé avec succès" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
};

const updateIngredient = async (req, res) => {
    try {
        const ingredient = await ingredientService.updateIngredient(req.params.id, req.body);
        if (!ingredient) {
            return res.status(404).json({ status: 404, message: "Ingrédient non trouvé" });
        }
        res.status(200).json({ status: 200, data: ingredient, message: "Ingrédient mis à jour avec succès" });
    } catch (e) {
        res.status(500).json({ status: 500, message: e.message });
    }
};

const deleteIngredient = async (req, res) => {
    try {
        await ingredientService.deleteIngredient(req.params.id);
        res.status(200).json({ status: 200, message: "Ingrédient supprimé avec succès" });
    } catch (e) {
        res.status(500).json({ status: 500, message: e.message });
    }
};

const deleteIngredients = async (req, res) => {
    try {
        const ingredient = await ingredientService.deleteIngredients({});
        res.status(200).json({status: 200, data: ingredient, message: "Suppression réussie de la liste des ingrédients"});
    } catch (e) {
        res.status(400).json({status: 400, message: e.message});
    }
};

const addIngredientToRecipe = async (req, res) => {
    try {
        const ingredientRecipe = await ingredientService.addIngredientToRecipe(req.body);
        res.status(201).json({ status: 201, data: ingredientRecipe, message: "Ingrédient ajouté à la recette avec succès" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
};

module.exports = {
    getIngredients,
    getIngredient,
    createIngredient,
    updateIngredient,
    deleteIngredient,
    deleteIngredients,
    addIngredientToRecipe
};
