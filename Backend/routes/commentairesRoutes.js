const express = require("express");
const router = express.Router();

// Importer le controller
const {getCommentaire, getCommentairesByRecipe, getCommentaires, createCommentaire, updateCommentaire,deleteCommentaire, deleteCommentaires} = require("../controllers/commentairesController");

router.get("/commentaires", getCommentaires);
router.get("/by-recipe/:idRecipe", getCommentairesByRecipe);
router.get("/:id", getCommentaire);
router.post("/", createCommentaire);
router.put("/:id", updateCommentaire);
router.delete("/:id", deleteCommentaire);
router.delete("/", deleteCommentaires);

module.exports = router;
