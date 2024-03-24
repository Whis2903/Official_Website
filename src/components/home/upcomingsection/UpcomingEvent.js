import React from "react";
import "./UpcomingEvent.css";
import coming from "../../../assets/Events/coming.png";
import TimeStamp from "./TimeStamp";

const UpcomingEvent = () => {
  return (
    <>
      <section className="section h-100vh" id="upcomingevents" style={{marginBottom:"20px"}}>
        <div className="container">
          <div className="bbc1"></div>
          <div className="row">
            <div className="text-center">
              <h2 className="section-title">
                Our{" "}
                <span style={{ color: "var(--secondary-color)" }}>
                  Upcomming
                </span>{" "}
                Events
              </h2>
              <p className="section-subtitle">
              Exciting developments are currently underway for our upcoming events.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-around mx-auto">
            <TimeStamp
              img={coming}
              title="Yet to be decided"
              url="https://linktr.ee/srmsigkdd"
            />
            <TimeStamp
              img={coming}
              title="Yet to be decided"
              url="https://linktr.ee/srmsigkdd"
            />
            <TimeStamp
              img={coming}
              title="Yet to be decided"
              url="https://linktr.ee/srmsigkdd"
            />
          </div>
        </div>
        <div className="bar"></div>
      </section>
    </>
  );
};

export default UpcomingEvent;
