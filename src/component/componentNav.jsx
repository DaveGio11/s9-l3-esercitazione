import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="px-3">
          Libreria di Libri
        </Navbar.Brand>
        <Nav className="mr-auto px-5">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Browser</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNav;
