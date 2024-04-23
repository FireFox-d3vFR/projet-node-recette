const Membre = require("../models/membres");

// Récupérer la liste des membres
module.exports.getMembres = async (query) => {
  try {
    var membres = await Membre.find(query);
    return membres;
  } catch (e) {
    throw Error(
      `Erreur lors de l'interrogation de tous les membres : ${e.message}`
    );
  }
};

// Récupérer un membre suivant son id
module.exports.getMembre = async (query) => {
  try {
    var membre = await Membre.findOne(query);
    return membre;
  } catch (e) {
    throw Error(
      `Erreur lors de l'interrogation d'un membre selon son id : ${e.message}`
    );
  }
};

// // Récupérer un membre suivant son adresse-mail et son mot de passe
// module.exports.getMembres = async (query) => {
//     try {
//       var Membres = await Membres.findOne(query);
//       return Membres;
//     } catch (e) {
//       throw Error(
//         `Erreur lors de l'interrogation d'une catégorie : ${e.message}`
//       );
//     }
//   };

// Créer un membre
module.exports.createMembre = async (Membre) => {
  try {
    return await Membre.save();
  } catch (e) {
    throw Error(`Erreur lors de l'enregistrement d'un membre : ${e.message}`);
  }
};

// Mettre à jour un membre
module.exports.updateMembre = async (query, Membre) => {
  try {
    return await Membre.updateOne(query, Membre);
  } catch (e) {
    throw Error(
      `Erreur lors de la mise à jour d'un membre : ${e.message}`
    );
  }
};

// Supprimer un membre
module.exports.deleteMembre = async (query) => {
  try {
    return await Membre.deleteOne(query);
  } catch (e) {
    throw Error(`Erreur lors de la suppression d'un membre: ${e.message}`);
  }
};

// Supprimer un membre
module.exports.deleteMembres = async (query) => {
  try {
    return await Membre.deleteMany(query);
  } catch (e) {
    throw Error(
      `Erreur lors de la suppression de tous les membres : ${e.message}`
    );
  }
};
