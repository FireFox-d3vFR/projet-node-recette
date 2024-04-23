const categorieService = require("../services/categoriesServices");
const Categorie = require("../models/categorie");

// Récupérer la liste des catégories
module.exports.getCategories = async (req, res) => {
  try {
    var categories = await categorieService.getCategories({});
    return res.status(200).json({
      status: 200,
      data: categories,
      message: "Récupération réussie de la liste des catégories",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// Récupérer une catégorie suivant son id
module.exports.getCategorie = async (req, res) => {
  try {
    var categorie = await categorieService.getCategorie({ _id: req.params.id });
    return res.status(200).json({
      status: 200,
      data: categorie,
      message: "Récupération réussie de la catégorie",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// Créer une catégorie
module.exports.createCategorie = async (req, res) => {
  try {
    let categorie = new Categorie(req.body);
    categorie = await categorieService.createCategorie(categorie);
    return res.status(201).json({
      status: 201,
      data: categorie,
      message: "Sauvegarde réussie de la catégorie",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// Mettre à jour une catégorie
module.exports.updateCategorie = async (req, res) => {
  try {
    let categorie = await categorieService.updateCategorie(
      { _id: req.params.id },
      req.body
    );
    return res.status(201).json({
      status: 200,
      data: categorie,
      message: "Mise à jour de la catégorie réussie",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// Supprimer une catégorie
module.exports.deleteCategorie = async (req, res) => {
  try {
    await categorieService.deleteCategorie({ _id: req.params.id });
    return res.status(201).json({
      status: 200,
      message: "Suppression réussie de la catégorie",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// Supprimer la liste des catégories
module.exports.deleteCategories = async (req, res) => {
  try {
    await categorieService.deleteCategories({});
    return res.status(201).json({
      status: 200,
      message: "Suppression réussie de la liste des catégories",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
