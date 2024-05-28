const membreService = require("../services/membresServices");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getMembres = async (req, res) => {
  try {
    const membres = await membreService.getMembres({});
    res.status(200).json({
      status: 200,
      data: membres,
      message: "Récupération réussie de la liste des membres",
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};

const getMembre = async (req, res) => {
  try {
    const membre = await membreService.getMembre(req.params.id);
    if (!membre) {
      return res.status(404).json({
        status: 404,
        message: "Membre non trouvé",
      });
    }
    res.status(200).json({
      status: 200,
      data: membre,
      message: "Récupération réussie du membre",
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};

const getMembreByEmailAndPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const membre = await membreService.getMembreByEmail(email);
    if (!membre) {
      return res.status(404).json({
        status: 404,
        message: "Membre non trouvé",
      });
    }
    const match = await bcrypt.compare(password, membre.password);
    if (match) {
      const token = jwt.sign({id: membre._id}, process.env.SECRET_KEY, {
        expiresIn: '1h',
      });
      res.status(200).json({
        status: 200,
        data: {membre, token},
        message: "Connexion réussie",
      });
    } else {
      res.status(401).json({
        status: 401,
        message: "Mot de passe incorrecte",
      });
    }
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};

const createMembre = async (req, res) => {
  try {
    const membre = await membreService.createMembre(req.body);
    res.status(201).json({
      status: 201,
      data: membre,
      message: "Création réussie du membre",
    });
  } catch (e) {
    res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};

const updateMembre = async (req, res) => {
  try {
    const membre = await membreService.updateMembre(req.params.id, req.body);
    if (!membre) {
      return res.status(404).json({
        status: 404,
        message: "Membre non trouvé",
      });
    }
    res.status(200).json({
      status: 200,
      data: membre,
      message: "Mise à jour réussie du membre",
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};

const deleteMembre = async (req, res) => {
  try {
    await membreService.deleteMembre(req.params.id);
    res.status(200).json({
      status: 200,
      message: "Suppression réussie du membre",
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};

const deleteMembres = async (req, res) => {
  try {
    await membreService.deleteMembres({});
    res.status(200).json({
      status: 200,
      message: "Suppression réussie de la liste des membres",
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};

module.exports = {
  getMembres,
  getMembre,
  getMembreByEmailAndPassword,
  createMembre,
  updateMembre,
  deleteMembre,
  deleteMembres,
};
