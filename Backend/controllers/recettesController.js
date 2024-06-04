const recetteService = require("../services/recettesServices");
const categorieService = require("../services/categoriesServices");

const getRecettes = async (req, res) => {
    try {
        const recettes = await recetteService.getRecettes();
        res.status(200).json({ status: 200, data: recettes, message: "Recettes récupérées avec succès" });
    } catch (e) {
        res.status(500).json({ status: 500, message: e.message });
    }
};

const getRecettesByCategory = async (req, res) => {
    try {
        const recettes = await recetteService.getRecttesByCategory(req.params.categoryId);
        res.status(200).json({ status: 200, data: recettes, message: "Recettes récupérées avec succès pour la catégorie" });
    } catch (e) {
        res.status(500).json({ status: 500, message: e.message });
    }
};

const getRecette = async (req, res) => {
    try {
        const recette = await recetteService.getRecette(req.params.id);
        if (!recette) {
            return res.status(404).json({ status: 404, message: "Recette non trouvée" });
        }
        res.status(200).json({ status: 200, data: recette, message: "Recette récupérée avec succès" });
    } catch (e) {
        res.status(500).json({ status: 500, message: e.message });
    }
};

const createRecette = async (req, res) => {
    try {
        const recette = await recetteService.createRecette(req.body);
        res.status(201).json({ status: 201, data: recette, message: "Recette créée avec succès" });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message });
    }
};

const updateRecette = async (req, res) => {
    try {
        const recette = await recetteService.updateRecette(req.params.id, req.body);
        if (!recette) {
            return res.status(404).json({status: 404, message: "Recette non trouvée"});
        }
        res.status(200).json({status: 200, data: recette, message: "Recette mise à jour avec succès"});
    } catch (e) {
        res.status(500).json({status: 500, message: e.message});
    }
};

const deleteRecette = async (req, res) => {
    try {
        await recetteService.deleteRecette(req.params.id);
        res.status(200).json({status: 200, message: "Recette supprimée avec succès"});
    } catch (e) {
        res.status(500).json({status: 500, message: e.message});
    }
};

const deleteRecettes = async (req, res) => {
    try {
        const recette = await recetteService.deleteRecettes({});
        res.status(200).json({status: 200, data: recette, message: "Suppression réussie de la liste des recettes"});
    } catch (e) {
        res.status(500).json({status: 500, message: e.message});
    }
};

const incrementCategoryFavorites = async (req, res) => {
    try {
        console.log("Request received to increment favorites for category ID:", req.params.categoryId);
        const category = await categorieService.getCategorie(req.params.categoryId);
        if (!category) {
            return res.status(404).json({ message: "Catégorie non trouvée" });
        }
        console.log("Current category data:", category);
        category.nombre_de_favoris += 1;
        await category.save();
        res.status(200).json({
            status: 200,
            data: category,
            message: "Nombre de favoris mis à jour"
        });
    } catch (e) {
        console.error("Error while incrementing favorites:", e);
        res.status(400).json({
            status: 400,
            message: e.message
        });
    }
};


module.exports = {
    getRecette,
    getRecettes,
    getRecettesByCategory,
    createRecette,
    updateRecette,
    deleteRecette,
    deleteRecettes,
    incrementCategoryFavorites
};

