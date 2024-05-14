const express = require("express");
const router = express.Router();

// Importer le controller
const {getRecette, getRecettesByCategory, getRecettes, updateRecette, createRecette, deleteRecette, deleteRecettes} = require("../controllers/recettesController");

router.get("/recettes", getRecettes);
router.get("/by-category/:idCategory", getRecettesByCategory);
router.get("/:id", getRecette);
router.post("/", createRecette);
router.put("/:id", updateRecette);
router.delete("/:id", deleteRecette);
router.delete("/", deleteRecettes);

module.exports = router;
