import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='sm' sticky='top'>
        <Container>
          <ArrowRight color='white' />
          <Navbar.Brand href='#'>Cocktails</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse>
            <Nav className=''>
              <Nav.Link className='me' href='#home'>
                Home
              </Nav.Link>
              <Nav.Link className='me' href='#link'>
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
