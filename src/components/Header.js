import React from 'react';
import CardComponent from './CardComponent';
import { Navbar, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand href='#'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CardComponent></CardComponent>
    </>
  );
};

export default Header;
