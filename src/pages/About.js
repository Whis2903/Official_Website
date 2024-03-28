import React from 'react'
import '../css/About.css'

function About() { 

  return (
    <>
    <section className="landing-section section h-70vh" style={{marginTop:"220px"}}>
        <div className="container" style={{ marginTop: "-110px" }}>
          <div className="gbc1"></div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 text-center">
              <h1 className="title">
                About{" "}
                <span style={{ color: "var(--secondary-color)" }}>
                 Us
                </span>{" "}
              </h1>
            </div>
          </div>
          <div className="container">
  <div className="content">
  </div>
</div>
        </div>
      </section>
    </>
  )
}

export default About