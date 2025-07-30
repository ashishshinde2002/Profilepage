import React from "react";
import "./index.css";
import profileImg from "../../assets/ashishprofile.png";

const HeroSection = () => (
  <div id="home" className="hero-section">
     <div className="blur-box">
    <h1 className="header-text">
      I love to create <br />
      beautiful and <br />
      efficient websites
    </h1>
 
      <div className="hero-buttons">
        <button  className="discover-btn"><a href="#about" className="nav-link">Discover</a></button>
        <button className="discover-btn"><a href="#contact" className="nav-link">Contact Me</a></button>
      </div>
    </div>
    <div className="hero-image">
      <img src={profileImg} alt="Profile" />
      <div className="image-overlay"></div>
    </div>
  </div>
);

export default HeroSection; 