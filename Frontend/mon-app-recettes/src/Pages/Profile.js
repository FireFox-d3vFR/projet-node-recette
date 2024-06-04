import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";
import "./assets/Profile.scss";

function Profile() {
    const membre = JSON.parse(localStorage.getItem("membre"));

    return (
        <Container className="profile-container">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="profile-card">
                        <Card.Header as="h1" className="text-center">Mon Profil</Card.Header>
                        {membre && (
                            <Card.Body>
                                <Card.Text>
                                    <strong>Nom :</strong> {membre.firstName} {membre.lastName}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Email :</strong> {membre.email}
                                </Card.Text>
                            </Card.Body>
                        )}
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;