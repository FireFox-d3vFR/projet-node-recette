import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ListeRecettes() {
    const [recettes, setRecettes] = useState([]);

    useEffect(() => {
        axios.get('/api/recette/recettes')
            .then(response => {
                setRecettes(response.data.data);
            })
            .catch(error => console.error("Erreur lors de la récupération des recettes", error));
    }, []);

    return (
        <div>
            <h1>Liste des Recettes</h1>
            <ul>
                {recettes.map(recette => (
                    <li key={recette._id}>
                        <Link to={`/recettes/${recette._id}`}>
                        {recette.title} - {recette.description}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListeRecettes;
