import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import "./Dropdown.scss";

function DropdownMenu() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef(null);

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

  // Fonction de rappel pour fermer le dropdown menu lorsqu'il est cliqué à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  if (loading) {
    return <div>Chargement des categories...</div>;
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="dropdown-menu-custom">
      <div className="row-custom">
        {categories.map((category) => (
          <NavLink
            key={category._id}
            to={`/categories/${category._id}`}
            className="dropdown-item"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
