const commentaireService = require("../services/commentairesServices");
const Commentaire = require("../models/commentaire");

// Récupérer la liste des commentaires
module.exports.getCommentaires = async (req, res) => {
    try {
      var commentaires = await commentaireService.getCommentaires({});
      return res.status(200).json({
        status: 200,
        data: commentaires,
        message: "Récupération réussie de la liste des commentaires",
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };

  // Récupérer du commentaire suivant son id
  module.exports.getCommentaire = async (req, res) => {
    try {
      var commentaire = await commentaireService.getCommentaire({ _id: req.params.id });
      return res.status(200).json({
        status: 200,
        data: commentaire,
        message: "Récupération réussie du commentaire",
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };

  // Créer un commentaire
  module.exports.createCommentaire = async (req, res) => {
    try {
      let commentaire = new Commentaire(req.body);
      commentaire = await commentaireService.createCommentaire(commentaire);
      return res.status(201).json({
        status: 201,
        data: commentaire,
        message: "Sauvegarde réussie du commentaire",
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };

  // Mettre à jour un commentaire
  module.exports.updateCommentaire = async (req, res) => {
    try {
      let commentaire = await commentaireService.updateCommentaire(
        { _id: req.params.id },
        req.body
      );
      return res.status(201).json({
        status: 200,
        data: commentaire,
        message: "Mise à jour du commentaire réussie",
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };

  // Supprimer un commentaire
  module.exports.deleteCommentaire = async (req, res) => {
    try {
      await commentaireService.deleteCommentaire({ _id: req.params.id });
      return res.status(201).json({
        status: 200,
        message: "Suppression réussie du commentaire",
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };

  // Supprimer la liste des commentaires
  module.exports.deleteCommentaires = async (req, res) => {
    try {
      await commentaireService.deleteCommentaires({});
      return res.status(201).json({
        status: 200,
        message: "Suppression réussie de la liste des commentaires",
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };
