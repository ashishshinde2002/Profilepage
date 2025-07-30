import React, { useState } from "react";
import "./gallery.css";
import profileImg from "../../assets/collage.jpg"; // Replace with your image


const slides = [
  {
    title: " I-Campus : smart academic and administrative portal",
    text2: " Tech Stack: HTML, CSS, Bootstrap, JavaScript, Django",
    text: 'Built a comprehensive system to manage multiple colleges with roles including Principal, HOD, teaching & non-teaching staff, students, and librarian. Implemented role-based access and functionalities for effective administration and record management.',
    img: profileImg,
  },

  // Add more slides if needed
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const { title,text2, text, img } = slides[index];

  return (
    <div id="projects" className="gallery-container">
      <h2>Projects</h2>
      <div className="gallery-box">
        <img src={img} alt="profile" className="profile-img-rect" />
        <h2 className="title">{title}</h2>
        <p className="description">{text2}</p>
        <p className="description">{text}</p>
        <div className="controls">
          <button className="nav-btn" onClick={handlePrev}>❮</button>
          <button className="nav-btn" onClick={handleNext}>❯</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
