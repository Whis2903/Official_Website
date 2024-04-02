import React from 'react';
import '../err/Err.css';
import Errimage from "./img/404.svg"
function Err() {
  return (
    <>
      <section className="landing-sectionn section h-70vh" style={{ marginTop: "220px", animation: "fadeUpp 1s forwards" }}>
        <div className="container" style={{ marginTop: "-110px" }}>
          <div className="gbc1"></div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 text-center mobtitle">
              <h1 className="title head404">
              <div className="Erlogo" style={{marginBottom:"20px"}}><img src={Errimage} className='er'/></div>
                <span className="head404" style={{ color: "var(--secondary-color)", textShadow: "0 0 10px #57abd7, 0 0 15px #57abd7" }}>
                The page you are looking for does not exist{" "}
                </span><br />
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

export default Err;
