import { FaUser } from 'react-icons/fa'; // Import the user icon from Font Awesome
import React, { useEffect, useState } from 'react';
import A from '../../img/V.png';
import B from '../../img/I.png';
import B1 from '../../img/S.png';
import C from '../../img/H.png';
import D from '../../img/A.png';
import E from '../../img/L.png';
import F from '../../img/K.png';
import G from '../../img/1.PNG';
import H from '../../img/2.PNG';
import I from '../../img/3.PNG';
import J from '../../img/4.PNG';
import K from '../../img/5.PNG';
import L from '../../img/6.PNG';
import M from '../../img/II.png';
import '../../styles/LandingPage.css';
import logo from '../../img/logo.png';


const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const targetText = 'A Data-Driven Hiring & Advance Job Search Platform. . .';
  const typingSpeed = 100; // Adjust this value to control the typing speed (milliseconds per character)
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentCharIndex = 0;
    let isTyping = true;

    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (currentCharIndex <= targetText.length) {
          setTypedText(targetText.slice(0, currentCharIndex));
          currentCharIndex++;
        } else {
          isTyping = false;
          setTimeout(() => {
            isTyping = true;
            currentCharIndex = 0;
            setTypedText('');
          }, 1786); // Wait for 2 seconds before starting the next loop
        }
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);
  return (
    <div className="App">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <div className="navbar-item-container">
          <div className="navbar-item-group">
            <button className="navbar-item">Post a Job</button>
            <a className="navbar-item" href="/JobSearch">Search a Job</a>
            <a className="navbar-item" href={G}>Our Vision</a>
            <a className="navbar-item" href={H}>Why Us</a>
            <a className="navbar-item" href={L}>Contact Us</a>
          </div>
          <button className="login-signup-button" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? <span>Logout</span> : <FaUser className="icon" />}
          </button>
        </div>
      </nav>
      <section className="section">
        <div className="text1">
          <h1>{typedText}</h1>
        </div>
      </section>

      <section className="sectionV">
        <div>
          <img src={A} className="V" alt="Loading..." />
        </div>

        <div className="grid-container">
          <div className="grid-item">We connect recruiters with top talent and enable candidates to showcase their skills effectively using visually captivating portfolios.
          </div>

          <div className="grid-item0">
            <h1>Recruiter</h1>
            <img src={B} className="I" alt="Loading..." />
            <h1>Talent</h1>
            <img src={B1} className="S" alt="Loading..." /></div>
        </div>
      </section>
      <section className="sectionI">
        <div className="grid-containerI">
          <div className="grid-itemI">
            <img src={M} className="III" alt="Loading..." />
          </div>
          <div className="grid-itemII">
            <p>The vision of our company is to revolutionize thethe way talent is discovered, developed and connected with the right opportunities.</p><p>We envision a future where individuals hae equal acess to meaningful to meaningfull wmploymentn and comanies can easily find and recruit top talent.</p>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="grid-item2">
          <img src={C} className="H" alt="Loading..." />
          <img src={D} className="A" alt="Loading..." />
          <img src={E} className="L" alt="Loading..." />
          <img src={F} className="SS" alt="Loading..." />


          <img src={G} className="II" alt="Loading..." />
          <img src={I} className="G" alt="Loading..." />
          <img src={J} className="HH" alt="Loading..." />
          <img src={K} className="K" alt="Loading..." />
          <img src={L} className="U" alt="Loading..." />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          Hiclousia &copy; {new Date().getFullYear()} | All rights reserved |
          <a href="/" className="footer-link">Privacy Policy</a> |
          <a href="/" className="footer-link">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

// <section className="sectionS">
// <div className="grid-containerS">
//   <div className="grid-itemS"><p>Our data-driven end-to-end recruitment process Automation.</p>
//   </div>
//   <div className="grid-itemSS"><p className="grid-itemSSS">Intelligent Job Posting
//   <h1 className="grid-itemSSSS"><ul><li>Create detailed job postings with specific requirements and desired skills.</li>

//   <li>Our platform automates the screening process by analyzing candidates’ smart portfolios to shortlist the most suitable candidates.</li></ul>
//   </h1></p>
//     <p className="grid-itemSSS">Streamlined Workflow<h1 className="grid-itemSSSS"><ul><li>Our platform streamlines the recruitment workflow by offering end-to-end capabilities, from job posting to candidate selection.
//     </li>

//     <li>Recruiters could review candidate portfolios, schedule interviews, and collaborate with hiring teams seamlessly.
//     </li></ul>
//     </h1></p>
//   </div>

//   <div className="grid-itemSS"><p className="grid-itemSSS">Data-Driven Candidate Matching
//   <h1 className="grid-itemSSSS"><ul><li>Our platform leverages advanced data analytics and machine learning algorithms to match candidates with skills requirements.
//     </li>
//     <li>Recruiters could review candidate portfolios, schedule interviews, and collaborate with hiring teams seamlessly.
//     </li></ul>
//     </h1>
//   </p>
//     <p className="grid-itemSSS">Direct Communication
//     <h1 className="grid-itemSSSS"><ul><li>Our platform facilitates seamless communication and collaboration between employers and candidates.
//     </li>
//     <li>Employers can interact with candidates directly through the platform, streamlining the interview and selection process.
//     </li></ul>
//     </h1>
//     </p>
//   </div>

// </div>
// </section>