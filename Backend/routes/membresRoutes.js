const express = require("express");
const router = express.Router();
const {getMembres, getMembre, getMembreByEmailAndPassword, createMembre, updateMembre, deleteMembre, deleteMembres} = require("../controllers/membresController");

router.get("/membres", getMembres);
router.get("/:id", getMembre);
router.post("/login", getMembreByEmailAndPassword);
router.post("/", createMembre);
router.put("/:id", updateMembre);
router.delete("/:id", deleteMembre);
router.delete("/", deleteMembres);

module.exports = router;
