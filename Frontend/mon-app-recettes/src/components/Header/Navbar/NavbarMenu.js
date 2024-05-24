import React, { useState } from "react";
import "./Navbar.scss";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import DropdownMenu from "./Dropdown/DropdownMenu";

function CustomNavbar() {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

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
                Liste des Catégories
              </span>
              {showDropdown && (
                <div className="menu-custom">
                  <DropdownMenu />
                </div>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
