const express = require("express");
const router = express.Router();

// Importer le controller
const {
    getCategories,
    getCategorie,
    createCategorie,
    updateCategorie,
    deleteCategorie,
    deleteCategories, 
    toggleFavorite,
    getPopularCategories
} = require("../controllers/categoriesController");

router.get("/categories", getCategories);
router.get("/:id", getCategorie);
router.get("/categories/populaires", getPopularCategories);
router.post("/", createCategorie);
router.post("/:categoryId/favoris", toggleFavorite);
router.put("/:id", updateCategorie);
router.delete("/:id", deleteCategorie);
router.delete("/", deleteCategories);

module.exports = router;
