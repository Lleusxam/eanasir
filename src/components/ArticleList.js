import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './ArticleList.css'; 

function Article() {
  return (
    <div className="article-container">
      <h1 className="titulo-article">Artigos</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card className="article-card">
            <Card.Img variant="top" src="./ea-nasir/eanasir.png" alt="Imagem" /> 
            <Card.Body>
              <Card.Link as={Link} to="eanasir">
                <Card.Title>O primeiro caloteiro da história?</Card.Title>
              </Card.Link>
              <Card.Text>
                Ea-Nasir foi um comerciante da antiga Mesopotâmia que ficou conhecido por ser o primeiro caloteiro registrado na história.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Article;
