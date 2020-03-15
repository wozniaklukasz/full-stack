import React from 'react';
import './header.scss';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';

function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
          </Nav>
        </Navbar.Collapse>
        <LanguageSwitcher />
      </Container>
    </Navbar>
  );
}

export default Header;
