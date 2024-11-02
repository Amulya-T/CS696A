import React from 'react';
import { Navbar, Form, FormControl, NavDropdown } from 'react-bootstrap';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-3 d-flex align-items-center">
      <Form className="d-flex me-auto">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      <FaBell className="me-3" />
      <NavDropdown title={<FaUserCircle />} id="basic-nav-dropdown">
        <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
        <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
};

export default Header;
