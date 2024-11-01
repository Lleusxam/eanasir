import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './Home.css';
function Home() {
    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center bg-antique">
          <Row>
            <Col className="text-center">
              <h1 className="display-4 text-antique">Site em Construção</h1>
              <p className="lead text-muted mb-4">Estamos preparando conteúdos históricos e poéticos para você. Volte em breve!</p>
              <p className="small text-muted">© 2024 - Um presente do passado</p>
            </Col>
          </Row>
        </Container>
      );
}

export default Home;
