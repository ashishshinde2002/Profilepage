import React, { useRef } from 'react';
import './footar.css';
import emailjs from '@emailjs/browser';

// Import icons
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaBriefcase } from 'react-icons/fa';


export const Footar = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ayiduil', 'template_r2ck5ra', form.current, {
        publicKey: 'cbm2DYda32xPvJHEJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div id="contact" className="footer-section">
      <h2 className="footer-heading">Get <strong>In Touch</strong></h2>
      <div className="footer-content">
        <div className="footer-form">
        
        <form ref={form} onSubmit={sendEmail}>
  <input type="text" name="user_name" placeholder="Your Name" />
  <input type="email" name="user_email" placeholder="Your Email" />
  <input type="text" name="user_phone" placeholder="Your Phone" />
  <textarea name="message" placeholder="Write a Message"></textarea>
  <button type="submit">Send Message</button>
</form>

        </div>

        <div className="footer-contact">
       
          <p><FaEnvelope className="footer-icon" /><strong>Email :</strong> ashishshinde7083@gmail.com</p>
          <p><FaPhone className="footer-icon" /><strong>Phone :</strong> +91 7083102734</p>
          <p><FaPhone className="footer-icon" /><strong>Secondary Phone :</strong> +91 7821877759</p>
          <p><FaMapMarkerAlt className="footer-icon" /><strong>Address :</strong> near Kandoba Bazar Wangi Road Sant Kabir Nagar Parbhani Maharashtra 431401</p>
        </div>
      </div>

      <div className="footer-bottom">
  <div className="social-icons">
    <a href="https://www.instagram.com/ashishshinde7083" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="https://www.linkedin.com/in/ashish-shinde-b52690245/" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn />
    </a>
    <a href="https://www.naukri.com/profile" target="_blank" rel="noopener noreferrer">
      <FaBriefcase /> {/* For Naukri */}
    </a>
    <a href="https://github.com/ashishshinde2002" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
  </div>
</div>

    </div>
  );
};
