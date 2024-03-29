import React from 'react'
import '../css/Event.css'
import TopImg from '../components/eventdetails/TopImg/TopImg'
function Event() { 

  return (
    <>
    <section className="landing-section section h-70vh" style={{marginTop:"220px"}}>
        <div className="container" style={{ marginTop: "-110px" }}>
          <div className="gbc1"></div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 text-center">
              <h1 className="title">
                Event{" "}
                <span style={{ color: "var(--secondary-color)",textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7" }}>
                 Name
                </span>{" "}
              </h1>
              <TopImg/>
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

export default Event