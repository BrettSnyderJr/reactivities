import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar id='navBar' expand='md' variant='dark' fixed='top'>
      <Navbar.Brand as={NavLink} to='/' href='#home'>
        Reactivities
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link as={NavLink} to='/activities'>
            Activities
          </Nav.Link>
          <Nav.Link as={NavLink} to='/errors'>
            Errors
          </Nav.Link>
          <Nav.Link as={Button} variant='primary' className='text-white'>
            <NavLink to='/create-activity' className='text-white text-decoration-none'>
              Create Activity
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
