const express = require("express");
const router = express.Router();

// Importer le controller
const categorieApiController = require("../controllers/categoriesController");

router.get("/categories", categorieApiController.getCategories);
router.get("/:id", categorieApiController.getCategorie);
router.post("/", categorieApiController.createCategorie);
router.put("/:id", categorieApiController.updateCategorie);
router.delete("/:id", categorieApiController.deleteCategorie);
router.delete("/", categorieApiController.deleteCategories);

module.exports = router;
