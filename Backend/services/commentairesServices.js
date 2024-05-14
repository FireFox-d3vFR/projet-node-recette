const Commentaire = require("../models/commentaire");

// Récupérer la liste des commentaire
const getCommentaires = async (query) => {
  return await Commentaire.find(query).populate("idRecipe");
};

// Récupérer un commentaire suivant l'id d'une recette
const getCommentairesByRecipe = async (recipeId) => {
  return await Commentaire.find({ idRecipe: recipeId }).populate("idRecipe");
};

// Récupérer un commentaire suivant son id
const getCommentaire = async (id) => {
  return await Commentaire.findById(id).populate("idRecipe");
};

// Créer un commentaire
const createCommentaire = async (commentaireData) => {
  const commentaire = new Commentaire(commentaireData);
  return await commentaire.save();
};

// Mettre à jour un commentaire
const updateCommentaire = async (id, commentaireData) => {
  return await Commentaire.findByIdAndUpdate(id, commentaireData, {
    new: true,
  });
};

// Supprimer un commentaire
const deleteCommentaire = async (id) => {
  return await Commentaire.findByIdAndDelete(id);
};

// Supprimer la liste des commentaires
const deleteCommentaires = async (query) => {
  return await Commentaire.deleteMany(query);
};

module.exports = {getCommentaire, getCommentaires, getCommentairesByRecipe, createCommentaire, updateCommentaire, deleteCommentaire, deleteCommentaires};
