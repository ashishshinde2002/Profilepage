import React from "react";
import "./header.css";

const Header = () => (
  <header className="header">
    <div className="logo">  
      <span className="logo-circle">A</span>
      <span className="logo-text"> Hello I'am </span>
      <span className="typing-demo">ASHISH</span>
    </div>
    <nav className="nav">
      <a href="#home" className="nav-link">Home</a>
      <a href="#about" className="nav-link">About</a>
      <a href="#projects" className="nav-link">Projects</a>
      <a href="#contact" className="nav-link">Contact</a>
      {/* <a href="#">Services</a> */}
      {/* <div className="dropdown">
        <a href="#">Drop ▼</a>
      </div> */}
      {/* <a href="#">Contact</a> */}
    </nav>
  </header>
);

export default Header;

<div className="logo">
  <span className="logo-circle">A</span>
  <div className="blur-box">
    <span className="logo-text"> Hello I'am </span>
    <span className="typing-demo">ASHISH</span>
    <div style={{ color: "#fff", fontSize: "2.5rem", fontWeight: "bold" }}>
      I love to create <br />
      beautiful and <br />
      efficient websites
    </div>
  </div>
</div>

