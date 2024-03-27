import React from "react";
import "./SponsorSection.css";
import srmLogo from "../sponsorsection/images/srm.svg"; 
import dsbslogo from "../sponsorsection/images/dsbs.png";
import acmlogo from "../sponsorsection/images/acm.png";
import sigkdd from "../sponsorsection/images/sigkdd.png"
const SponsorSection = (props) => {
  return (
    <>
      <section className="landing-section section h-70vh" style={{marginTop:"100px"}}>
        <div className="container" style={{ marginTop: "-110px" }}>
          <div className="gbc1"></div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 text-center">
              <h1 className="title">
                Our{" "}
                <span style={{ color: "var(--secondary-color)" }}>
                  Sponsors
                </span>{" "}
                {props.chaptername}
              </h1>
            </div>
          </div>
          <div className="container">
  <div className="row justify-content-around"> {/* Changed justify-content-center to justify-content-around */}
    <div className="col-lg-3 text-center mb-4"> {/* Adjusted column width to accommodate equal spacing */}
      <img src={srmLogo} alt="SRM Logo" className="srm-logo" style={{ height: "100px", marginTop: "20px" }} />
    </div>
    <div className="col-lg-3 text-center mb-4"> {/* Adjusted column width to accommodate equal spacing */}
      <img src={dsbslogo} alt="DSBS Logo" className="srm-logo" style={{ height: "100px", marginTop: "20px" }} />
    </div>
    <div className="col-lg-3 text-center mb-4"> {/* Adjusted column width to accommodate equal spacing */}
      <img src={sigkdd} alt="SIGKDD Logo" className="srm-logo" style={{ height: "100px", marginTop: "20px" }} />
    </div>
    <div className="col-lg-3 text-center mb-4"> {/* Adjusted column width to accommodate equal spacing */}
      <img src={acmlogo} alt="ACM Logo" className="srm-logo" style={{ height: "100px", marginTop: "20px" }} />
    </div>
  </div>
</div>

        </div>
      </section>
    </>
  );
};

export default SponsorSection;
