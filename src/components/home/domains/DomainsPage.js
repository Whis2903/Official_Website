

import React from 'react';
import './Domains.css';

function DomainsPage() {
  return (
    <div className="domains-container">
      <h2 className="section-title">
        Explore{" "}
        <span style={{ color: "var(--secondary-color)" }}>
          Domains
        </span>{" "}
      </h2>
      <div className="domains-grid">
        <div className="domain-card">
          <div className="logo">Logo</div> {/* Placeholder for logo */}
          <h3>R&D</h3>
          <p>
            Research and Development domain involves exploring new ideas, technologies, and methodologies to drive innovation.
          </p>
        </div>
        <div className="domain-card">
          <div className="logo">Logo</div> {/* Placeholder for logo */}
          <h3>Web/App Dev</h3>
          <p>
            Web/App Development domain focuses on creating interactive and responsive applications for the web and mobile platforms.
          </p>
        </div>
        <div className="domain-card">
          <div className="logo">Logo</div> {/* Placeholder for logo */}
          <h3>Corporate</h3>
          <p>
            Corporate domain deals with business strategies, management, and operations within organizations.
          </p>
        </div>
        <div className="domain-card">
          <div className="logo">Logo</div> {/* Placeholder for logo */}
          <h3>Creatives</h3>
          <p>
            Creatives domain involves artistic and design-oriented work, including graphic design, UI/UX design, and multimedia production.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DomainsPage;
