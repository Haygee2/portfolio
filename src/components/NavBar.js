import React from "react";
import { Link } from "react-router-dom"; // Add this import

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contacts">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
