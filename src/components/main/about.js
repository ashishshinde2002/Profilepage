import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython,
  FaDatabase, FaAws
} from 'react-icons/fa';
import {
  SiDjango, SiBootstrap
} from 'react-icons/si';
import resume from '../../assets/AshishResume.pdf';
import './about.css';
import profilePic from '../../assets/pf.jpg';

const About = () => {
  return (
    <div id="about" className='page-content'>
      <div className="about-section">
        <div className="about-left">
          <img src={profilePic} alt="Profile" className="about-image" />
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <p className="about-subtitle">
            My name is Ashish Shinde, and I am a fresh graduate pursuing my Bachelor of Technology in Computer Science and Engineering. I come from a supportive family including my mother, father, and sister, who motivate me to keep learning and growing every day. I am passionate about technology, web development, and coding, and I enjoy building modern, user-friendly websites.
          </p>
          <div className="about-details">
            <p><strong>Name:</strong> Ashish Pandurang Shinde</p>
            <p><strong>Date of birth:</strong> August 17, 2002</p>
            <p><strong>Address:</strong> Wagholi Pune Maharashtra India</p>
            <p><strong>Zip code:</strong> 412207</p>
            <p><strong>Email:</strong> ashishshinde7083@gmail.com</p>
            <p><strong>Phone:</strong> +91 -7083102734</p>
          </div>
          <a href={resume} download="AshishResume.pdf" className="btn">DOWNLOAD CV</a>
        </div>
      </div>

      <div className="about-resume">
        <h2>Resume</h2>
        <p className="about-subtitle">
          Recent B.Tech Computer Science graduate with a solid background in web development. Completed an internship developing real-world web applications. Strong problem-solving, communication, and teamwork skills. Eager to join a full-time web developer role to deliver impactful solutions and grow with an innovative team.
        </p>
        <div className="resume-grid">
          <div className="resume-card">
            <h3>2024 - 2025</h3>
            <p><strong>Internship</strong></p>
            <p>Virat Consultancy & IT Services</p>
            <p>Wagholi Pune Maharashtra India</p>
            <p>Duration: 6 months (July 2024 - January 2025)</p>
            <p>Skills: HTML, CSS, JavaScript, Django</p>
          </div>
          <div className="resume-card">
            <h3>2022 - 2025</h3>
            <p><strong>Bachelor In Computer Science and Engineering</strong></p>
            <p>DYP Salokhenager College of Engineering, Kolhapur Maharashtra India</p>
            <p>Shivaji University Kolhapur Maharashtra India</p>
            <p>CGPA: 6.8</p>
          </div>
          <div className="resume-card">
            <h3>2020 - 2022</h3>
            <p><strong>Computer Science and Engineering</strong></p>
            <p>Shri Shivaji Polytechnic Institute Parbhani Maharashtra India</p>
            <p>Percentage: 81%</p>
          </div>
          <div className="resume-card">
            <h3>2018</h3>
            <p>10th Board</p>
            <p>Maharashtra State Board of Secondary & Higher Secondary Education, Pune</p>
            <p>N.V.S. Marathwada High School</p>
            <p>Percentage: 71.32%</p>
          </div>
        </div>
      </div>

      <div className="about-Skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skills-category">
            <h3>Frontend</h3>
            <ul>
              <li>
                <span><FaHtml5 className="skill-icon" /> HTML5</span>
                <div className="progress-bar"><div className="progress" style={{ width: '90%' }}></div></div>
              </li>
              <li>
                <span><FaCss3Alt className="skill-icon" /> CSS</span>
                <div className="progress-bar"><div className="progress" style={{ width: '85%' }}></div></div>
              </li>
              <li>
                <span><FaJs className="skill-icon" /> JavaScript</span>
                <div className="progress-bar"><div className="progress" style={{ width: '80%' }}></div></div>
              </li>
              <li>
                <span><FaReact className="skill-icon" /> React.js</span>
                <div className="progress-bar"><div className="progress" style={{ width: '75%' }}></div></div>
              </li>
              <li>
                <span><SiBootstrap className="skill-icon" /> Bootstrap</span>
                <div className="progress-bar"><div className="progress" style={{ width: '80%' }}></div></div>
              </li>
            </ul>
          </div>

          <div className="skills-category">
            <h3>Backend</h3>
            <ul>
              <li>
                <span><FaPython className="skill-icon" /> Python</span>
                <div className="progress-bar"><div className="progress" style={{ width: '70%' }}></div></div>
              </li>
              <li>
                <span><SiDjango className="skill-icon" /> Django</span>
                <div className="progress-bar"><div className="progress" style={{ width: '65%' }}></div></div>
              </li>
              <li>
                <span><FaDatabase className="skill-icon" /> SQL</span>
                <div className="progress-bar"><div className="progress" style={{ width: '75%' }}></div></div>
              </li>
            </ul>
          </div>

          <div className="skills-category">
            <h3>Tools & Technologies</h3>
            <ul>
              <li>
                <span><FaAws className="skill-icon" /> AWS</span>
                <div className="progress-bar"><div className="progress" style={{ width: '60%' }}></div></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
