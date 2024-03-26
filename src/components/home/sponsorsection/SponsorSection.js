import React from "react";
import "./SponsorSection.css";
import { NavLink } from "react-router-dom";
import srmLogo from "../sponsorsection/images/srm.svg"; 
import dsbslogo from "../sponsorsection/images/dsbs.png";
import acmlogo from "../sponsorsection/images/acm.png";
const SponsorSection = (props) => {
  return (
    <>
      <section className="landing-section section h-70vh" style={{marginTop:"180px"}}>
        <div className="container" style={{ marginTop: "-110px" }}>
          <div className="gbc1"></div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 text-center">
              <h1 className="title">
                Our
                <br />
                <span style={{ color: "var(--secondary-color)" }}>
                  Sponsors
                </span>{" "}
                {props.chaptername}
              </h1>
            </div>
          </div>
          <div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-4 text-center"> {/* Reduced column width to accommodate equal spacing */}
      <img src={srmLogo} alt="SRM Logo" className="srm-logo" style={{ height: "100px", marginTop: "20px" }} />
    </div>
    <div className="col-lg-4"></div> {/* Added an empty column for equal spacing */}
    <div className="col-lg-4 text-center"> {/* Reduced column width to accommodate equal spacing */}
      <img src={dsbslogo} alt="DSBS Logo" className="srm-logo" style={{ height: "100px", marginTop: "20px" }} />
    </div>
    <div className="col-lg-4 text-center"> {/* Reduced column width to accommodate equal spacing */}
      <img src={acmlogo} alt="ACM Logo" className="srm-logo" style={{ height: "100px", marginTop: "-130px" }} /> {/* Adjusted margin-top */}
    </div>
  </div>
</div>

        </div>
      </section>
    </>
  );
};

export default SponsorSection;
