import React, { useEffect } from 'react';
import './Focus.css';
import Hackathons from "./images/win.svg"
import Learn from "./images/learning.svg"
import Network from "./images/networking.svg"
import Handson from "./images/handson.svg"
import "aos/dist/aos.css";
import AOS from 'aos';

function Focus() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the duration as needed
      once: true, // Only animate once
      easing: 'ease-in-out', // Easing type
    });
  }, []);

  return (
    <div className="focus-container">
      <h2 className="section-title focus-title" style={{marginTop:"20px"}}>
        Our main{" "}
        <span style={{ color: "var(--secondary-color)",textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7" }}>
          Focus
        </span>{" "}
      </h2>
      <div className="focus-grid">
        <div className="focus-card" data-aos="fade-up" data-aos-duration="1000">
          <div className="logo"><img src={Learn} className='image' style={{marginTop:"45px"}}/></div> {/* Placeholder for logo */}
          <h3 style={{textShadow: "0 0 10px #57abd7, 0 0 0px #57abd7"}}>Promoting Knowledge</h3>
        </div>
        <div className="focus-card" data-aos="fade-up" data-aos-duration="1000">
          <div className="logo"><img src={Handson} className='image' /></div> {/* Placeholder for logo */}
          <h3 style={{textShadow: "0 0 10px #57abd7, 0 0 0px #57abd7"}}>Hands-on Learning</h3>
        </div>
        <div className="focus-card" data-aos="fade-up" data-aos-duration="1000">
          <div className="logo"><img src={Hackathons} className='image' style={{marginTop:"55px"}}/></div> {/* Placeholder for logo */}
          <h3 style={{textShadow: "0 0 10px #57abd7, 0 0 0px #57abd7"}}>Competitions and Challenges</h3>
        </div>
        <div className="focus-card" data-aos="fade-up" data-aos-duration="1000">
          <div className="logo"><img src={Network} className='image'/></div> {/* Placeholder for logo */}
          <h3 style={{textShadow: "0 0 10px #57abd7, 0 0 0px #57abd7"}}>Networking Opportunities</h3>
        </div>
      </div>
    </div>
  );
}

export default Focus;
