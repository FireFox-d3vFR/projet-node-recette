const Membres = require("../models/membres");

// Récupérer la liste des membre
module.exports.getMembres = async (query) => {
  try {
    var Membres = await Membres.find(query);
    return Membres;
  } catch (e) {
    throw Error(
      `Erreur lors de l'interrogation de toutes les catégories : ${e.message}`
    );
  }
};

// Récupérer un membre suivant son id
module.exports.getMembres = async (query) => {
  try {
    var Membres = await Membres.findOne(query);
    return Membres;
  } catch (e) {
    throw Error(
      `Erreur lors de l'interrogation d'une catégorie : ${e.message}`
    );
  }
};

// Récupérer un membre suivant son adresse-mail et son mot de passe
module.exports.getMembres = async (query) => {
    try {
      var Membres = await Membres.findOne(query);
      return Membres;
    } catch (e) {
      throw Error(
        `Erreur lors de l'interrogation d'une catégorie : ${e.message}`
      );
    }
  };

// Créer un membre
module.exports.createMembres = async (Membres) => {
  try {
    return await Membres.save();
  } catch (e) {
    throw Error(`Erreur lors de l'enregistrement de catégorie : ${e.message}`);
  }
};

// Mettre à jour un membre
module.exports.updateMembres = async (query, Membres) => {
  try {
    return await Membres.updateOne(query, Membres);
  } catch (e) {
    throw Error(
      `Erreur lors de la mise à jour de l'utilisateur : ${e.message}`
    );
  }
};

// Supprimer un membre
module.exports.deleteMembres = async (query) => {
  try {
    return await Membres.deleteOne(query);
  } catch (e) {
    throw Error(`Erreur lors de la suppression de la catégorie : ${e.message}`);
  }
};

// Supprimer un membre
module.exports.deleteMembres = async (query) => {
  try {
    return await Membres.deleteMany(query);
  } catch (e) {
    throw Error(
      `Erreur lors de la suppression de toutes les catégories : ${e.message}`
    );
  }
};
