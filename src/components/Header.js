import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='sm' sticky='top'>
        <Container>
          <Navbar.Brand href='#'>Cocktails</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className=''>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
