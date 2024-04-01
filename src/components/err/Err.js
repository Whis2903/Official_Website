import React from 'react'
import '../err/Err.css'

function Err() { 

  return (
    <>
    <section className="landing-section section h-70vh" style={{marginTop:"220px"}}>
        <div className="container" style={{ marginTop: "-110px" }}>
          <div className="gbc1"></div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 text-center mobtitle">
              <h1 className="title head404">
                <span className="head404" style={{ color: "var(--secondary-color)",textShadow: "0 0 10px #57abd7, 0 0 15px #57abd7" }}>
                 404
                </span>{" "}<br/>
                <span className="pp404" >
                 The page you are looking for does not exist
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

export default Err