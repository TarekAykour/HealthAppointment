import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/appointment">Book Appointment</Link></li>
        <li><Link to="/find-doctor">Find a Doctor</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
