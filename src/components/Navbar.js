// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/search">Search</Link></li>
        
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
