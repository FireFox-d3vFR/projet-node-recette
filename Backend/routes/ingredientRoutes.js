const express = require("express");
const router = express.Router();

// Importer le controller
const {
  getIngredients,
  getIngredient,
  createIngredient,
  updateIngredient,
  deleteIngredient,
  deleteIngredients,
  addIngredientToRecipe,
} = require("../controllers/ingredientController");

router.get("/ingredients", getIngredients);
router.get("/:id", getIngredient);
router.post("/", createIngredient);
router.put("/:id", updateIngredient);
router.delete("/:id", deleteIngredient);
router.delete("/", deleteIngredients);
// Route pour ajouter un ingrédient à une recette
router.post("/add-to-recipe", addIngredientToRecipe);

module.exports = router;
