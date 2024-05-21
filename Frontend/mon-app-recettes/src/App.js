import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ListeRecettes from "./components/ListeRecettes";
import Recette from "./components/Recette";
import "./App.scss";
import Footer from "./components/Footer";
import CustomNavbar from "./components/Header/Navbar";

function App() {
  return (
    <Router>
      <div className="app-container" style={{width: "100%"}}>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recettes" element={<ListeRecettes />} />
          <Route path="/recettes/:id" element={<Recette />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
