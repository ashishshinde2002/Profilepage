import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">  
        <span className="logo-circle">A</span>
        <span className="logo-text"> Hello I'm </span>
        <span className="typing-demo">ASHISH</span>
        <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
        <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
        <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
        <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
