import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1 className="text-center">Bienvenue sur LyonEat</h1>
      <p className="text-justify">Découvrez de délicieuses recettes...</p>
      <ul>
        <li>
          <Link to={"/recettes"}>Liste des recettes</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
