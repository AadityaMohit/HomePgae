import React from 'react';
import './Navbar.css';  // Custom CSS file for navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Brand Logo</div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
