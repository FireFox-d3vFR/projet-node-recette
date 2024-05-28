import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() { // Supprimez simplement la déclaration de la prop ici
  const [categories, setCategories] = useState([]);
  const [recettes, setFeaturedRecipes] = useState([]);
  const membre = JSON.parse(localStorage.getItem("membre"));

  useEffect(() => {
    // Charger toutes les catégories
    axios
      .get(`/api/categorie/categories`)
      .then((response) => setCategories(response.data.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des catégories", error)
      );

    // Charger les recettes en vedette
    axios
      .get("/api/recette/recettes")
      .then((response) => setFeaturedRecipes(response.data.data))
      .catch((error) =>
        console.error(
          "Erreur lors de la récupération des recettes en vedettes",
          error
        )
      );
  }, []);

  if (!categories.length) {
    return <div>Chargement des catégories...</div>;
  }

  if (!recettes.length) {
    return <div>Chargement des recettes...</div>;
  }

  return (
    <div className="container">
      <section className="hero text-center mb-4">
        <h1>Bienvenue sur LyonEat</h1>
        {membre && (
          <div className="welcome-message">
            <p className="alert alert-success">
              Bonjour <span className="user-name">{membre.firstName} {membre.lastName}</span>, bienvenue sur notre site !
            </p>
          </div>
        )}
        <p>Découvrez de nouvelles saveurs chaque jour !</p>
      </section>

      <section className="search-bar mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher des recettes..."
          />
          <button className="btn btn-outline-secondary" type="button">
            Rechercher
          </button>
        </div>
      </section>

      <section className="categories mb-4">
        <h2>Catégories populaires</h2>
        <div className="row">
          {categories.map((category) => (
            <div className="col-md-4 mb-3" key={category._id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{category.name}</h5>
                  <Link
                    to={`/categories/${category._id}`}
                    className="btn btn-primary"
                  >
                    Voir les recettes
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-recipes mb-4">
        <h2>Recettes en vedettes</h2>
        <div className="row">
          {recettes.map((recipe) => (
            <div className="col-md-4 mb-3" key={recipe._id}>
              <div className="card">
                <img
                  src={recipe.picture}
                  className="card-img-top"
                  alt={recipe.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">{recipe.description}</p>
                  <Link
                    to={`/recettes/${recipe._id}`}
                    className="btn btn-primary"
                  >
                    Voir la recette
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
