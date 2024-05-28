import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllRecipes from "./Pages/Recettes";
import Recipe from "./Pages/Recette";
import Connexion from "./components/Login/Connexion";
import Footer from "./components/Footer/Footer";
import CustomNavbar from "./components/Header/Navbar/NavbarMenu";
import "./App.scss";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // État initial non authentifié

  return (
    <Router>
      <div className="app-container" style={{width: "100%"}}>
        <CustomNavbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
          <Route path="/recettes" element={<AllRecipes />} />
          <Route path="/recettes/:id" element={<Recipe />} />
          <Route path="/connexion" element={<Connexion setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
