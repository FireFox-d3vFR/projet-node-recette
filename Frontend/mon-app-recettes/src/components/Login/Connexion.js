import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Connexion.scss"; // Fichier de styles personnalisé

function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/membre/login", { email, password });
      // Stocker les informations de l'utilisateur, rediriger, etc.
      const { token, membre } = response.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("membre", JSON.stringify(membre));
      // Rediriger vers la page d'accueil ou une autre page protégée
      navigate("/");
    } catch (error) {
      setError("Erreur de connexion. Veuillez vérifier vos identifiants.");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>Connexion</h2>
          {error && <p className="text-danger">{error}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Entrez votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3 justify-content-md-center">
              Se Connecter
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Connexion;
