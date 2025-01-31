import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/printing">3D Printing Projects</Link>
        </li>
        <li>
          <Link to="/coding">Coding Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
