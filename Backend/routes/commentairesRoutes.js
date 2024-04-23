const express = require("express");
const router = express.Router();

// Importer le controller
const commentaireApiController = require("../controllers/commentairesController");

router.get("/commentaires", commentaireApiController.getCommentaires);
router.get("/:id", commentaireApiController.getCommentaire);
router.post("/", commentaireApiController.createCommentaire);
router.put("/:id", commentaireApiController.updateCommentaire);
router.delete("/:id", commentaireApiController.deleteCommentaire);
router.delete("/", commentaireApiController.deleteCommentaires);

module.exports = router;
