import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "./Recette.scss";

function Recette() {
    const { id } = useParams();
    const [recette, setRecette] = useState(null);

    useEffect(() => {
        axios.get(`/api/recette/${id}`)
            .then(response => {
                setRecette(response.data.data);
            })
            .catch(error => console.error("Erreur lors de la récupération des recettes", error));
    }, [id]);

    if (!recette) {
        return <div>Chargement de la recette...</div>
    }

    return (
        <Container className="my-4">
            <Button as={Link} to="/recettes" variant="secondary" className="mb-4">
                Retout à la liste des recettes
            </Button>
            <Card>
                <Card.Img variant="top" src={recette.picture} alt={recette.title}/>
                <Card.Body>
                    <Card.Title>{recette.title}</Card.Title>
                    <Card.Text>{recette.description}</Card.Text>
                </Card.Body>
                {recette.ingredients && (
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <h5>Ingrédients</h5>
                            <ul>
                                {recette.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </ListGroup.Item>
                    </ListGroup>
                )}
                {recette.steps && (
                    <Card.Body>
                        <h5>Étapes</h5>
                        <ol>
                            {recette.steps.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </Card.Body>
                )}
            </Card>
        </Container>
    );
}

export default Recette;
