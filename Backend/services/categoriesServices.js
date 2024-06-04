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

// Obtenir les catégories populaires
const getPopularCategories = async () => {
    return Categorie.find().sort({nombre_de_favoris: -1}).limit(3);
}

const toggleFavorite = async (categoryId, membreId) => {
    const categorie = await Categorie.findById(categoryId);
    if (!categorie) {
        throw new Error('Catégorie non trouvée');
    }

    const index = categorie.favoris.indexOf(membreId);
    if (index === -1) {
        // Ajouter aux favoris
        categorie.favoris.push(membreId);
        categorie.nombre_de_favoris += 1;
    } else {
        // Retirer des favoris
        categorie.favoris.splice(index, 1);
        categorie.nombre_de_favoris -= 1;
    }

    await categorie.save();
    return categorie;
};

module.exports = {
    getCategories,
    getCategorie,
    createCategorie,
    updateCategorie,
    deleteCategorie,
    deleteCategories,
    getPopularCategories,
    toggleFavorite
};
