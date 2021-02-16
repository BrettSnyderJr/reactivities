import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

interface Props {
  openForm: (id: string) => void;
}

const NavBar = ({ openForm }: Props) => {
  return (
    <Navbar id="navBar" expand="md" variant="dark" fixed="top">
      <Navbar.Brand href="#home">Reactivities</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Activities</Nav.Link>
          <Nav.Link
            as={Button}
            variant="primary"
            className="text-white"
            onClick={openForm}
          >
            Create Activity
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
