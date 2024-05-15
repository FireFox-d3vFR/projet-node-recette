import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Recette({ recetteId }) {
    const { id } = useParams();
    const [recette, setRecette] = useState(null);

    useEffect(() => {
        axios.get(`/api/recette/${id}`)
            .then(response => {
                setRecette(response.data.data);
            })
            .catch(error => console.error("Erreur lors de la récupération des recettes", error));
    }, [id]);

    if (!recette) {
        return <div>Chargement de la recette...</div>
    }

    return (
        <div>
            <h1>{recette.title}</h1>
            <p>{recette.description}</p>
        </div>
    );
}

export default Recette;