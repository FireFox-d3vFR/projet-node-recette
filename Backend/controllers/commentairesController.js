const commentaireService = require("../services/commentairesServices");

const getCommentaires = async (req, res) => {
  try {
    const commentaires = await commentaireService.getCommentaires({});
    res.status(200).json({
      status: 200,
      data: commentaires,
      message: "Récupération réussie de la liste des commentaires",
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};

const getCommentairesByRecipe = async (req, res) => {
  try {
    const commentaires = await commentaireService.getCommentairesByRecipe(
      req.params.idRecipe
    );
    res.status(200).json({
      status: 200,
      data: commentaires,
      message: "Commentaires de la recette recupérés avec succès",
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};

const getCommentaire = async (req, res) => {
  try {
    const commentaire = await commentaireService.getCommentaire(req.params.id);
    if (!commentaire) {
      return res.status(404).json({
        status: 404,
        message: "Commentaire non trouvé",
      });
    }
    res.status(200).json({
      status: 200,
      data: commentaire,
      message: "Commentaire récupéré avec succès",
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};

const createCommentaire = async (req, res) => {
  try {
    const commentaire = await commentaireService.createCommentaire(req.body);
    res.status(201).json({
      status: 201,
      data: commentaire,
      message: "Commentaire créé avec succès",
    });
  } catch (e) {
    res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};

const updateCommentaire = async (req, res) => {
  try {
    const commentaire = await commentaireService.updateCommentaire(
      req.params.id,
      req.body
    );
    if (!commentaire) {
      return res
        .status(404)
        .json({ status: 404, message: "Commentaire non trouvé" });
    }
    res
      .status(200)
      .json({
        status: 200,
        data: commentaire,
        message: "Commentaire mis à jour avec succès",
      });
  } catch (e) {
    res.status(500).json({ status: 500, message: e.message });
  }
};

const deleteCommentaire = async (req, res) => {
  try {
    await commentaireService.deleteCommentaire(req.params.id);
    res
      .status(200)
      .json({ status: 200, message: "Commentaire supprimé avec succès" });
  } catch (e) {
    res.status(500).json({ status: 500, message: e.message });
  }
};

const deleteCommentaires = async (req, res) => {
  try {
    const commentaire = await commentaireService.deleteCommentaires({});
    res.status(200).json({
      status: 200,
      data: commentaire,
      message: "Suppression réussie de la liste des commentaires",
    });
  } catch (e) {
    res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};

module.exports = {
  getCommentaires,
  getCommentairesByRecipe,
  getCommentaire,
  createCommentaire,
  updateCommentaire,
  deleteCommentaire,
  deleteCommentaires
};
