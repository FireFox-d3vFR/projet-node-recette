const Commentaire = require("../models/commentaire");

// Récupérer la liste des commentaire
module.exports.getCommentaires = async (query) => {
  try {
    var commentaires = await Commentaire.find(query);
    return commentaires;
  } catch (e) {
    throw Error(
      `Erreur lors de l'interrogation de toutes les commentaires : ${e.message}`
    );
  }
};

// Récupérer un commentaire suivant son id
module.exports.getCommentaire = async (query) => {
  try {
    var commentaire = await Commentaire.findOne(query);
    return commentaire;
  } catch (e) {
    throw Error(
      `Erreur lors de l'interrogation d'un commentaire : ${e.message}`
    );
  }
};

// Créer un commentaire
module.exports.createCommentaire = async (commentaire) => {
  try {
    return await commentaire.save();
  } catch (e) {
    throw Error(
      `Erreur lors de l'enregistrement de commentaire : ${e.message}`
    );
  }
};

// Mettre à jour un commentaire
module.exports.updateCommentaire = async (query, commentaire) => {
  try {
    return await Commentaire.updateOne(query, commentaire);
  } catch (e) {
    throw Error(`Erreur lors de la mise à jour du commentaire : ${e.message}`);
  }
};

// Supprimer un commentaire
module.exports.deleteCommentaire = async (query) => {
  try {
    return await Commentaire.deleteOne(query);
  } catch (e) {
    throw Error(`Erreur lors de la suppression du commentaire : ${e.message}`);
  }
};

// Supprimer la liste des commentaires
module.exports.deleteCommentaires = async (query) => {
  try {
    return await Commentaire.deleteMany(query);
  } catch (e) {
    throw Error(
      `Erreur lors de la suppression de toutes les commentaires : ${e.message}`
    );
  }
};
