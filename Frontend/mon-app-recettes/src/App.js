import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllRecipes from "./Pages/Recettes";
import Recipe from "./Pages/Recette";
import Connexion from "./components/Login/Connexion";
import Footer from "./components/Footer/Footer";
import CustomNavbar from "./components/Header/Navbar/NavbarMenu";
import Profile from "./Pages/Profile";
import CategoryPage from "./Pages/Categories";
import "./App.scss";

function App() {
  const [membre, setMembre] = useState(JSON.parse(localStorage.getItem("membre")));

  const handleLogin = (user) => {
    localStorage.setItem("membre", JSON.stringify(user));
    setMembre(user);
  }

  const handleLogout = () => {
    localStorage.removeItem("membre");
    setMembre(null);
  };

  return (
    <Router>
      <div className="app-container" style={{ width: "100%" }}>
        <CustomNavbar handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home membre={membre} />} />
          <Route path="/recettes" element={<AllRecipes />} />
          <Route path="/recettes/:id" element={<Recipe />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/categories/:categoryId" element={<CategoryPage membre={membre}/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
