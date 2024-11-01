import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import './Navigationbar.css'; 

function NavigationBar() {
  return (
    <Navbar expand="lg" className="vintage-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-vintage">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-vintage">Início</Nav.Link>
            <Nav.Link as={Link} to="/artigos" className="nav-link-vintage">Histórias</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
