import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllRecipes from "./Pages/Recettes";
import Recipe from "./Pages/Recette";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import CustomNavbar from "./components/Header/Navbar/NavbarMenu";

function App() {
  return (
    <Router>
      <div className="app-container" style={{width: "100%"}}>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recettes" element={<AllRecipes />} />
          <Route path="/recettes/:id" element={<Recipe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
