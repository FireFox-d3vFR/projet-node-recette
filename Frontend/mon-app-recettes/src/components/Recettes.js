import React, {useState, useEffect} from "react";
import axios from "axios";

function Recettes() {
    const [recettes, setRecettes] = useState([]);

    useEffect(() => {
        axios.get('/api/recettes')
            .then(response => {
                setRecettes(response.data.data);
            })
            .catch(error => console.error("Erreur lors de la récupération des recettes", error));
    }, []);

    return (
        <div>
            <h1>Liste des Recettes</h1>
            <ul>
                {recettes.map(recette => {
                    <li key={recette._id}>{recette.title} - {recette.description}</li>
                })}
            </ul>
        </div>
    );
}

export default Recettes;