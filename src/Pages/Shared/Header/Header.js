import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar,Container,Nav} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { Button} from 'react-bootstrap';

const Header = () => {

  const [user] = useAuthState(auth);

  const handleSignOut =() =>{
    signOut(auth);
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
          <Nav>
              <Nav.Link as={Link} to="about">About</Nav.Link>
              <Nav.Link as={Link} to="blogs">Blog</Nav.Link>
              {
                user?
                  
                  <Button onClick={handleSignOut} className='bg-color'>
                  Sign Out
                  </Button>
                  :
                 <Nav.Link as={Link} to="login">Login</Nav.Link>
              }
             
            </Nav>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;