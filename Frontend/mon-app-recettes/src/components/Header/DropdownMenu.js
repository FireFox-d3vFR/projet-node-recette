import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Dropdown.scss";

function DropdownMenu() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/categorie/categories`)
      .then((response) => {
        setCategories(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Erreur lors de la récupération des catégories");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Chargement des categories...</div>;
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="dropdown-menu-custom">
      <div className="row">
        {categories.map((category) => (
          <div className="col-md-4" key={category._id}>
            <NavLink
              to={`/categories/${category._id}`}
              className="dropdown-item"
            >
              {category.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
