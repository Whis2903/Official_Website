

import React from 'react';
import './Domains.css';
import RDLogo from "./images/rd.png"
import Creatives from "./images/creatives.png"
import WebApp from "./images/webapp.png"
import Corp from "./images/corp.png"

function Domains() {
  return (
    <div className="domains-container">
      <h2 className="section-title" style={{marginBottom:"35px"}}>
        Explore our{" "}
        <span style={{ color: "var(--secondary-color)" }}>
          Domains
        </span>{" "}
      </h2>
      <div className="domains-grid">
        <div className="domain-card">
          <div className="logo"><img src={RDLogo} className='image'/></div> {/* Placeholder for logo */}
          <h3>R&D</h3>
          <p>
            Research and Development domain involves exploring new ideas, technologies, and methodologies to drive innovation.
          </p>
        </div>
        <div className="domain-card">
          <div className="logo"><img src={WebApp} className='image' /></div> {/* Placeholder for logo */}
          <h3>Web/App Dev</h3>
          <p>
          Developing and maintaining websites with intuitive user interface and seamless user experience along with precise server-side web application logic.
          </p>
        </div>
        <div className="domain-card">
          <div className="logo"><img src={Corp} className='image'/></div> {/* Placeholder for logo */}
          <h3>Corporate</h3>
          <p>
            Corporate domain deals with business strategies, management, and operations within organizations.
          </p>
        </div>
        <div className="domain-card">
          <div className="logo"><img src={Creatives} className='image'/></div> {/* Placeholder for logo */}
          <h3>Creatives</h3>
          <p>
            Creatives domain involves artistic and design-oriented work, including graphic design, UI/UX design, and multimedia production.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Domains;