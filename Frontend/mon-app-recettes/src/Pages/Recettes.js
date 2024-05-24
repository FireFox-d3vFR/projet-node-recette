import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./assets/AllRecipes.scss";

function ListeRecettes() {
    const [recettes, setRecettes] = useState([]);

    useEffect(() => {
        axios.get('/api/recette/recettes')
            .then(response => {
                setRecettes(response.data.data);
            })
            .catch(error => console.error("Erreur lors de la récupération des recettes", error));
    }, []);

    return (
        <Container>
            <h1 className="my-4">Toutes les recettes</h1>
            <Row>
                {recettes.map(recette => (
                    <Col key={recette._id} sm={12} md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={recette.picture} alt={recette.title}/>
                            <Card.Body>
                                <Card.Title>{recette.title}</Card.Title>
                                <Card.Text>{recette.description}</Card.Text>
                                <Button as={Link} to={`/recettes/${recette._id}`} variant="primary">
                                    Voir la recette
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ListeRecettes;
