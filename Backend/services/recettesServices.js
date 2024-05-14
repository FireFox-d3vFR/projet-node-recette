const Recette = require("../models/recette");

// Récupérer la liste des recettes
const getRecettes = async () => {
    return await Recette.find().populate('idCategory').populate('idMembre').populate('ingredients');
};

// Récupérer la liste des recettes suivant l'id d'une catégorie
const getRecttesByCategory = async (categoryId) => {
    return await Recette.find({idCategory: categoryId}).populate('idCategory').populate('idMembre').populate('ingredients');
};

// Récuperer une recette suivant son id
const getRecette = async (id) => {
    return await Recette.findById(id).populate('idCategory').populate('idMembre').populate('ingredients');
}

// Créer une recette
const createRecette = async (recetteData) => {
    const recette = new Recette(recetteData);
    return recette.save();
};

// Mettre à jour une recette
const updateRecette = async (id, recetteData) => {
    return await Recette.findByIdAndUpdate(id, recetteData, {new: true}).populate('idCategory').populate('idMembre').populate('ingredients');
}

// Supprimer une rectte
const deleteRecette = async (id) => {
    return await Recette.findByIdAndDelete(id);
};

// Supprimer la liste des recettes
const deleteRecettes = async (query) => {
    return await Recette.deleteMany(query);
};

module.exports = {getRecette, getRecettes, getRecttesByCategory, createRecette, updateRecette, deleteRecette, deleteRecettes};
