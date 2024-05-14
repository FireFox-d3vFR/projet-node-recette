const categorieService = require("../services/categoriesServices");

const getCategories = async (req, res) => {
  try {
    const categories = await categorieService.getCategories({});
    res.status(200).json({
      status: 200,
      data: categories,
      message: "Récupération réussie de la liste des catégories",
    });
  } catch (e) {
    res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};

const getCategorie = async (req, res) => {
  try {
    const categorie = await categorieService.getCategorie(req.params.id);
    if (!categorie) {
      return res.status(404).json({
        status: 404,
        message: "Catégorie non trouvée",
      });
    }
    res.status(200).json({
      status: 200,
      data: categorie,
      message: "Récupération réussie de la catégorie",
    });
  } catch (e) {
    res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};

const createCategorie = async (req, res) => {
  try {
    const categorie = await categorieService.createCategorie(req.body);
    res.status(201).json({
      status: 201,
      data: categorie,
      message: "Création réussie de la catégorie",
    });
  } catch (e) {
    res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};

const updateCategorie = async (req, res) => {
  try {
    const categorie = await categorieService.updateCategorie(
      req.params.id,
      req.body
    );
    if (!categorie) {
      return res.status(404).json({
        status: 404,
        message: "Catégorie non trouvée",
      });
    }
    res.status(200).json({
      status: 200,
      data: categorie,
      message: "Mise à jour réussie de la catégorie",
    });
  } catch (e) {
    res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};

const deleteCategorie = async (req, res) => {
  try {
    await categorieService.deleteCategorie(req.params.id);
    res.status(200).json({
      status: 200,
      message: "Suppression réussie de la catégorie",
    });
  } catch (e) {
    res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};

const deleteCategories = async (req, res) => {
  try {
    await categorieService.deleteCategories({});
    res.status(200).json({
      status: 200,
      message: "Suppression réussie de la liste des catégories",
    });
  } catch (e) {
    res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};

module.exports = {
  getCategories,
  getCategorie,
  createCategorie,
  updateCategorie,
  deleteCategorie,
  deleteCategories,
};
