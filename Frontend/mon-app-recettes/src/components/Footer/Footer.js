import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Footer.scss"; // Fichier de styles personnalisé

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={6} className="text-lg-start mb-3 mb-lg-0">
            <h5 className="text-uppercase">LyonEat</h5>
            <p className="footer-text">
              LyonEat est votre destination pour découvrir de délicieuses
              recettes et explorer le monde de la cuisine.
            </p>
          </Col>
          <Col lg={6} className="text-lg-end mb-3 mb-lg-0">
            <Button variant="outline-primary" className="me-3" href="mailto:maquenhem.jonathan@gmail.com">
              Nous contacter
            </Button>
            <Button variant="outline-secondary" href="https://github.com/FireFox-d3vFR/projet-node-recette" target="_blank">
              Lien GitHub
            </Button>
          </Col>
        </Row>
      </Container>
      <div
        className="text-center py-3"
        style={{ backgroundColor: "#0d6efd", color: "#ffffff" }}
      >
        &copy; {new Date().getFullYear()} LyonEat
      </div>
    </footer>
  );
}

export default Footer;
