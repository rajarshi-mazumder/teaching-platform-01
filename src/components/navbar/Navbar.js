import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">Pawfect Nihongo</div>

      {/* Links */}
      <div className="navbar-links">
        <a href="/" className="navbar-link">
          Home
        </a>
        <a href="/add_learning_path" className="navbar-link">
          Add Learnng Path
        </a>
        <a href="/about" className="navbar-link">
          About Us
        </a>
        <a href="/contact" className="navbar-link">
          Contact
        </a>
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
