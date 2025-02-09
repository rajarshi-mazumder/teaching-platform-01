import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">Pawfect Nihongo</div>

      {/* Links */}
      <div className="navbar-links">
        <a href="/" className="navbar-link">
          Home
        </a>

        <a href="/about" className="navbar-link">
          About Us
        </a>
        <a href="/contact" className="navbar-link">
          Contact
        </a>

        {/* Dropdown Menu */}
        <div className="dropdown">
          <button
            className="navbar-link dropdown-button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            More ▾
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="/add_learning_path" className="navbar-link">
                  Add Learnng Path
                </a>
              </li>
              <li>
                <a href="/add_course" className="navbar-link">
                  Add Course
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Sign-In/Sign-Up Buttons */}
      <div className="navbar-buttons">
        <button className="navbar-button">Sign In</button>
        <button className="navbar-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
