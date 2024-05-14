// Initialisation du projet
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Importer les fichiers routes
const categorieApiRoute = require("./routes/categoriesRoutes");
const commentaireApiRoute = require("./routes/commentairesRoutes");
const ingredientApiRoute = require("./routes/ingredientRoutes");
const membreRoute = require("./routes/membresRoutes");
const recetteApiRoute = require("./routes/recettesRoutes");

const port = 8090;

// Chargement du fichier de configuration
dotenv.config();
// Récupérer l'application express
const app = express();
// Supprimer le message DeprecationWarning
mongoose.set("strictQuery", true);

// Connexion à la base de données (MongoDB)
mongoose
  .connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie"))
  .catch((error) => console.log("Connexion à MongoDB échouée" + error));

// Parse pour les formulaire
app.use(bodyParser.urlencoded({ extended: false }));
// Parse pour le json
app.use(bodyParser.json());

/**
 * Indiquer les différents urls de départs des routes
 */
app.use("/api/categorie", categorieApiRoute);
app.use("/api/commentaire", commentaireApiRoute);
app.use("/api/ingredient", ingredientApiRoute);
app.use("/api/membre", membreRoute);
app.use("/api/recette", recetteApiRoute);

// Lancer le serveur express
app.listen(port, () => {
  console.log(`Le serveur a démarré sur le port ${port}`);
});
