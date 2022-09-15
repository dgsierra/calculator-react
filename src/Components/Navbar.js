import React from 'react';
import './css/Navbar.css';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator2 from './Calculator2';
import Home from './Home';
import Quote from './Quote';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h2 className="navbar-brand text">Math Magicians</h2>
        <ul className="navbar-elements">
          <li className="navbar-element"><Link className="navtext" to="/">Home</Link></li>
          <li className="navbar-element"><Link className="navtext" to="/calculator2">Calculator</Link></li>
          <li className="navbar-element"><Link className="navtext" to="/quote">Quote</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator2" element={<Calculator2 />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
      ;
    </>
  );
}
