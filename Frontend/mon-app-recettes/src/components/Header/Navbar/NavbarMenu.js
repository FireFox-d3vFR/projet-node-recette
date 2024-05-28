import React, { useState } from "react";
import "./Navbar.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "./Dropdown/DropdownMenu";

function CustomNavbar({ handleLogout }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("membre");
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleNavLinkClick = () => {
    if (isAuthenticated) {
      handleLogout();
      navigate("/connexion");
      window.location.reload(); // Rafraîchir la page après la déconnexion
    }
  };

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className={location.pathname !== "/" ? "active" : ""}>
          LyonEat
        </Navbar.Brand>
        <div className="d-flex align-items-center ms-auto">
          <Nav className="d-lg-none"> {/* Visible uniquement sur petit écran */}
            {isAuthenticated ? (
              <Dropdown align="end" show={showProfileDropdown} onToggle={handleProfileClick}>
                <Dropdown.Toggle as={Nav.Link} className="nav-link" id="profile-dropdown">
                  <i className="fas fa-user"></i> {/* Icône de profil */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/profile">Mon Profil</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/settings">Paramètres</Dropdown.Item>
                  <Dropdown.Item onClick={handleNavLinkClick}>Déconnexion</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Nav.Link as={NavLink} to="/connexion" className="btn btn-outline-primary">
                Connexion
              </Nav.Link>
            )}
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-2" /> {/* Bouton Toggle */}
        </div>
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
          <Nav className="d-none d-lg-flex ms-auto"> {/* Visible uniquement sur grand écran */}
            {isAuthenticated ? (
              <Dropdown align="end" show={showProfileDropdown} onToggle={handleProfileClick}>
                <Dropdown.Toggle as={Nav.Link} className="nav-link" id="profile-dropdown">
                  <i className="fas fa-user"></i> {/* Icône de profil */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/profile">Mon Profil</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/settings">Paramètres</Dropdown.Item>
                  <Dropdown.Item onClick={handleNavLinkClick}>Déconnexion</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Nav.Link as={NavLink} to="/connexion" className="btn btn-outline-primary">
                Connexion
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
