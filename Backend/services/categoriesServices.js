const Categorie = require("../models/categorie");

// Récupérer la liste des catégories
const getCategories = async (query) => {
    return Categorie.find(query);
};

// Récupérer une catégorie suivant son id
const getCategorie = async (id) => {
    return Categorie.findById(id);
};

// Créer une catégorie
const createCategorie = async (categorieData) => {
    const categorie = new Categorie(categorieData);
    return categorie.save();
};

// Mettre à jour une catégorie
const updateCategorie = async (id, categorieData) => {
    return Categorie.findByIdAndUpdate(id, categorieData, {new: true});
};

// Supprimer une catégorie
const deleteCategorie = async (id) => {
    return Categorie.findByIdAndDelete(id);
};

// Supprimer la liste de catégorie
const deleteCategories = async (query) => {
    return Categorie.deleteMany(query);
}

module.exports = {
    getCategories,
    getCategorie,
    createCategorie,
    updateCategorie,
    deleteCategorie,
    deleteCategories
};
