const express = require("express");
const router = express.Router();

// Importer le controller
const {getCategories, getCategorie, createCategorie, updateCategorie, deleteCategorie, deleteCategories} = require("../controllers/categoriesController");

router.get("/categories", getCategories);
router.get("/:id", getCategorie);
router.post("/", createCategorie);
router.put("/:id", updateCategorie);
router.delete("/:id", deleteCategorie);
router.delete("/", deleteCategories);

module.exports = router;
