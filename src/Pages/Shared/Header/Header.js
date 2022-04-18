import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar,Container,Nav} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

  const [user] = useAuthState(auth);

  const logout =() =>{
    signOut();
  }

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
          { user?
            <div>
              <p>user.email</p>
              <button onClick={logout}>Log Out</button>
            </div>
            :
            <Nav><Nav.Link as={Link} to="login">Login</Nav.Link></Nav>}
          </Container>
        </Navbar>
      </>
    );
};

export default Header;