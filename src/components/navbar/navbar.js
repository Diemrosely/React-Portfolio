import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const MainNav = () => {
return (
<>
  <Navbar collapseOnSelect expand="lg" variant="light">
    <Navbar.Brand><Link className="links" to="/">DIEM LY</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Nav>
      <Nav.Link><Link className="links" to="/">About</Link></Nav.Link>
        <Nav.Link><Link className="links" to="/Portfolio">Portfolio</Link></Nav.Link>
        <Nav.Link><Link className="links" to="/Contact">Contact</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <br/><br/><br/>
</>
)};

export default MainNav;