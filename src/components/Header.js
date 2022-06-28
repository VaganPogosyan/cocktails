import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaGlassMartiniAlt } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='sm' sticky='top'>
        <Container>
          <FaGlassMartiniAlt
            className='me-2'
            color='white'
            fontSize={'1.1rem'}
          />
          <Navbar.Brand href='home'>Cocktails</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse>
            <Nav className='ms-auto'>
              <Nav.Link className='me' href='home'>
                Home
              </Nav.Link>
              <Nav.Link className='me' href='search'>
                Search
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
