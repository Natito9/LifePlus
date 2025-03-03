import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

function Navbar() {
  return (
    <nav>
        <ul>
        <li><Link to="/">Landing Page</Link></li>
        <li><Link to="/login">Login</Link></li>
       <li> <Link to="/hp/homepage">Healthcare Provider Homepage</Link></li>
       <li> <Link to="/patient/homepage">Patient Homepage</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;
