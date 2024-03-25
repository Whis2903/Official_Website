import React from "react";
import { useState } from "react";
import "./UpcomingEvent.css";
import coming from "../../../assets/Events/coming.png";
import TimeStamp from "./TimeStamp";
import { Card,Button } from "react-bootstrap";

const UpcomingEvent = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
  };
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
                  Upcoming
                </span>{" "}
                Events
              </h2>
              <p className="section-subtitle" style={{marginBottom:"40px"}}>
              Exciting developments are currently underway for our upcoming events.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-3 col-md-3 col-sm-3">
      <Card className="bg-black text-white glow mobcard">
        <Card.Img variant="top" src={coming}  style={{ borderWidth: '0px' ,borderRadius:"18px 18px 20px 20px"}}/>
        <Card.Body>
          <Card.Title style={{fontSize:"26px"}}>Event</Card.Title>
          <Card.Text className="custom-text">
          The technical event scheduled for this April will be updated soon.
          </Card.Text>
          <Button variant="primary"
        className={`custom-button ${buttonClicked ? 'clicked' : ''}`}
        onClick={handleClick}         style={{ backgroundColor: buttonClicked ? '#8000ff' : '#8000ff', borderColor: buttonClicked ? '#8000ff' : '#8000ff' }}
        >Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
</div>

      </section>
    </>
  );
};

export default UpcomingEvent;
