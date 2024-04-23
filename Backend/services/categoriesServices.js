const Categorie = require("../models/categorie");

// Récupérer la liste des catégories
module.exports.getCategories = async (query) => {
  try {
    var categories = await Categorie.find(query);
    return categories;
  } catch (e) {
    throw Error(
      `Erreur lors de l'interrogation de toutes les catégories : ${e.message}`
    );
  }
};

// Récupérer une catégorie suivant son id
module.exports.getCategorie = async (query) => {
  try {
    var categorie = await Categorie.findOne(query);
    return categorie;
  } catch (e) {
    throw Error(
      `Erreur lors de l'interrogation d'une catégorie : ${e.message}`
    );
  }
};

// Créer une catégorie
module.exports.createCategorie = async (categorie) => {
  try {
    return await categorie.save();
  } catch (e) {
    throw Error(`Erreur lors de l'enregistrement de catégorie : ${e.message}`);
  }
};

// Mettre à jour une catégorie
module.exports.updateCategorie = async (query, categorie) => {
  try {
    return await Categorie.updateOne(query, categorie);
  } catch (e) {
    throw Error(
      `Erreur lors de la mise à jour de l'utilisateur : ${e.message}`
    );
  }
};

// Supprimer une catégorie
module.exports.deleteCategorie = async (query) => {
  try {
    return await Categorie.deleteOne(query);
  } catch (e) {
    throw Error(`Erreur lors de la suppression de la catégorie : ${e.message}`);
  }
};

// Supprimer la liste des catégories
module.exports.deleteCategories = async (query) => {
  try {
    return await Categorie.deleteMany(query);
  } catch (e) {
    throw Error(
      `Erreur lors de la suppression de toutes les catégories : ${e.message}`
    );
  }
};
