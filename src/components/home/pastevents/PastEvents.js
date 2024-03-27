import React from "react";
import "./PastEvents.css";
import { Carousel } from "3d-react-carousal";
import flutter from "../../../assets/Events/sample.png";
import AutoFinal from "../../../assets/Events/sample.png";
// npm install 3d-react-carousal --force

const PastEvents = () => {
  let slides = [
    <img src={AutoFinal} className="imgg" alt="2" />,
    <img src={flutter} className="imgg" alt="1" />,
  ];

  const callback = function (index) {
    console.log("callback", index);
  };
  return (
    <section className="section h-100vh" id="pastevent" style={{marginTop:"100px",marginBottom:"50px"}}>
      <div className="container">
        <div className="gbc2"></div>
        <div className="row">
          <div className="text-center" style={{marginBottom:"20px"}}>
            <h2 className="section-title">
              Our{" "}
              <span style={{ color: "var(--secondary-color)" }}>Past</span>{" "}
              Events
            </h2>
            <p className="section-subtitle">
              Successful and crazy events we organised in the past
            </p>
          </div>
          <div className="carousal">
            {" "}
            <Carousel
              slides={slides}
              interval={2000}
              autoplay={true}
              onSlideChange={callback}
            />
          </div>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"
          />          
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
