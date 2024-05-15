import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Accueil</h1>
            <p>Bienvenue sur notre site de recettes</p>
            <ul>
                <li>
                    <Link to={'/recettes'}>Liste des recettes</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;