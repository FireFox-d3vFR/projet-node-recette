import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import DropdownMenu from "./Dropdown/DropdownMenu";

function CustomNavbar({ handleLogout }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Mettre à jour isAuthenticated en fonction de la présence du token
    const isAuthenticated = !!localStorage.getItem("token");
    setIsAuthenticated(isAuthenticated);
  }, []);

  const handleNavLinkClick = () => {
    if (isAuthenticated) {
      console.log("Logging out");
      handleLogout();
      setIsAuthenticated(false);
      navigate("/connexion");
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className={location.pathname !== "/" ? "active" : ""}>
          LyonEat
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" exact activeClassName="active">
              Accueil
            </Nav.Link>
            <Nav.Link as={NavLink} to="/recettes" activeClassName="active">
              Toutes les recettes
            </Nav.Link>
            <div
              className="nav-item dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className="nav-link dropdown-toggle">
                Recettes par catégories
              </span>
              {showDropdown && (
                <div className="menu-custom">
                  <DropdownMenu />
                </div>
              )}
            </div>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/connexion" onClick={handleNavLinkClick} className="btn btn-outline-primary">
              {isAuthenticated ? "Déconnexion" : "Connexion"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
