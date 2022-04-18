import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar,Container,Nav} from 'react-bootstrap';

const Header = () => {
    return (
        <>
        <Navbar bg="light" variant="light">
          <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="home#services">Services</Nav.Link>
        
          </Nav>
          <Nav><Nav.Link as={Link} to="about">About</Nav.Link></Nav>
          <Nav><Nav.Link as={Link} to="blogs">Blog</Nav.Link></Nav>
          <Nav><Nav.Link as={Link} to="login">Login</Nav.Link></Nav>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;