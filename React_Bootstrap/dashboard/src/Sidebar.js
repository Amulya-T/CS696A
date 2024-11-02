
import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaChartLine, FaUser, FaShoppingCart, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column bg-dark vh-100 p-3">
      <h3 className="text-white mb-4">Dashboard</h3>
      <Nav className="flex-column">
        <Nav.Link href="#home" className="text-light mb-2">
          <FaHome className="me-2" /> Dashboard
        </Nav.Link>
        <Nav.Link href="#users" className="text-light mb-2">
          <FaUser className="me-2" /> Users
        </Nav.Link>
        <Nav.Link href="#analytics" className="text-light mb-2">
          <FaChartLine className="me-2" /> Analytics
        </Nav.Link>
        <Nav.Link href="#orders" className="text-light mb-2">
          <FaShoppingCart className="me-2" /> Orders
        </Nav.Link>
        <Nav.Link href="#settings" className="text-light mb-2">
          <FaCog className="me-2" /> Settings
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
