import React from 'react'
import './css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <h2 className="navbar-brand">Math Magicians</h2>
    <ul className="navbar-elements">
      <li className="navbar-element">Home</li>
      <li className="navbar-element">Calculator</li>
      <li className="navbar-element">Quote</li>
    </ul>
  </nav>);
}

export default Navbar;