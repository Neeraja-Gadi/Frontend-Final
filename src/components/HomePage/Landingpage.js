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
// import { useNavigate, Link } from "react-router-dom"


const LandingPage = () => {
    
    const [user, setUser] = React.useState("");
    // const navigate = useNavigate()
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("userDetails")))

    }, [])

    function logOut() {
        localStorage.removeItem('userDetails');
        localStorage.removeItem('token');
        window.location.reload();
    }
  
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const targetText = 'A Data-Driven Hiring & Advance Job Search Platform. . .';
  const typingSpeed = 100; 
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
          }, 1786); 
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
          {user ? 
          user.recruiter === true ?
           <a className="navbar-item" href = "/SubscriptionModal">Post A JobPost</a> 
          : <a className="navbar-item" href="/JobSearch" > JobSearch</a> 
         
        : null
      }
            <a className="navbar-item" href={G}>Our Vision</a>
            <a className="navbar-item" href={H}>Why Us</a>
            <a className="navbar-item" href={L}>Contact Us</a>
            
          </div>
          {user ? (
              <a
                className="login-signup-button"
                onClick={logOut}
              >
                Log Out
              </a>
            ) : (
              
                <a className="navbar-item" href="/login" > <FaUser className="icon" /></a>
              
            )}  
          {/* <button className="login-signup-button" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? <span>Logout</span> : <FaUser className="icon" />}
          </button> */}
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