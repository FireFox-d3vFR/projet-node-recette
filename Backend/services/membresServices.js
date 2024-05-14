const Membre = require("../models/membres");

// Récupérer la listre des membres
const getMembres = async (query) => {
    return Membre.find(query);
};

// Récupérer un membre suivant son id
const getMembre = async (id) => {
    return await Membre.findById(id);
};

// Récupérer un membre suivant son email
const getMembreByEmail = async (email) => {
    return Membre.findOne({email: email});
};

// Créer un membre
const createMembre = async (membreData) => {
    const membre = new Membre(membreData);
    return membre.save();
};

// Mettre à jour un membre
const updateMembre = async (id, membreData) => {
    return Membre.findByIdAndUpdate(id, membreData, {new: true});
};

// Supprimer un membre suivant son id
const deleteMembre = async (id) => {
    return Membre.findByAndDelete(id);
};

// Supprimer la liste des membres
const deleteMembres = async (query) => {
    return Membre.deleteMany(query);
};

module.exports = {getMembres, getMembre, getMembreByEmail, createMembre, updateMembre, deleteMembre, deleteMembres};
