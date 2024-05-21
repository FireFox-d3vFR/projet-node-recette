import React from "react";
import "./Navbar.scss";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function CustomNavbar() {
  const location = useLocation();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
    //   bg="light"
    //   variant="light"
      className="custom-navbar"
    >
      <Container fluid>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className={location.pathname !== "/" ? "active" : ""}
        >
          LyonEat
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" exact activeClassName="active">
              Accueil
            </Nav.Link>
            <Nav.Link as={NavLink} to="/recettes" activeClassName="active">
              Liste des recettes
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categories" activeClassName="active">
              Recettes par catégories
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
