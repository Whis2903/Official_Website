import React from 'react';
import './About.css'; 

function AboutUs() {
  return (
    <div className="about-container">
         <h2 className="section-title">
                <span style={{ color: "var(--secondary-color)" }}>
                  About
                </span>{" "}
                Us
              </h2>
      <p className="about-content">
        Welcome to our community! We are a group of passionate individuals dedicated
        to exploring the exciting domains of Data Science, Machine Learning, Deep Learning,
        and Natural Language Processing. Our mission is to foster learning and innovation
        while staying at the forefront of cutting-edge technologies.
      </p>
      {/* Add the details you want in the about us page */}
    </div>
  );
}

export default AboutUs;
