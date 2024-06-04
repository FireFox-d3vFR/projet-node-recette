import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./assets/Categories.scss";

function CategoryPage({ membre }) {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [recettes, setRecettes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Charger les informations de la catégorie
    axios.get(`/api/categorie/${categoryId}`)
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((error) => {
        setError("Erreur lors de la récupération de la catégorie");
        setLoading(false);
      });

    // Charger les recettes de la catégorie
    axios.get(`/api/recette/category/${categoryId}`)
      .then((response) => {
        setRecettes(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Erreur lors de la récupération des recettes");
        setLoading(false);
      });
  }, [categoryId]);

  const handleToggleFavorite = () => {
    if (!membre) {
      setError("Vous devez être connecté pour ajouter aux favoris");
      return;
    }

    // Vérifier si la catégorie a des favoris et que le membre est connecté
    if (category.favoris && membre) {
      const membreId = membre._id;
      const favorisIndex = category.favoris.indexOf(membreId);
      if (favorisIndex === -1) {
        // Si l'ID du membre n'est pas trouvé dans les favoris, ajoutez-le
        axios.post(`/api/categorie/${categoryId}/favoris`, { membreId })
          .then((response) => {
            setCategory(response.data.data);
          })
          .catch((error) => {
            setError("Erreur lors de la mise à jour des favoris");
          });
      } else {
        // Si l'ID du membre est trouvé dans les favoris, retirez-le
        axios.delete(`/api/categorie/${categoryId}/favoris/${membreId}`)
          .then((response) => {
            setCategory(response.data.data)
          })
          .catch((error) => {
            setError("Erreur lors de la mise à jour des favoris");
          })
      }
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      {category && (
        <div className="category-header">
          <h1>{category.name}</h1>
          <Button 
            className="mb-4 addBtn" 
            variant="primary" 
            onClick={handleToggleFavorite}>
            {(category.favoris && category.favoris.includes(membre._id)) ? 'Retirer des favoris' : 'Ajouter aux favoris'} ({category.nombre_de_favoris})
          </Button>
          <Button className="mb-4" variant="secondary" as={Link} to="/">
            Retour
          </Button>
        </div>
      )}
      <div className="row">
        {recettes.map((recette) => (
          <div className="col-md-4 mb-3" key={recette._id}>
            <div className="card">
              <img
                src={recette.picture}
                className="card-img-top"
                alt={recette.title}
              />
              <div className="card-body">
                <h5 className="card-title">{recette.title}</h5>
                <p className="card-text">{recette.description}</p>
                <Link
                  to={`/recettes/${recette._id}`}
                  className="btn btn-primary"
                >
                  Voir la recette
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
