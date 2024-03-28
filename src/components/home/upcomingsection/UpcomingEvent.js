import React from "react";
import { useState } from "react";
import "./UpcomingEvent.css";
import coming from "../../../assets/Events/coming.png";
import { Card,Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLocationArrow, faMoneyBill, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';


const UpcomingEvent = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
  };
  return (
    <>
      <section className="section h-100vh" id="upcomingevents" style={{marginBottom:"120px"}}>
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
          <Card.Title  className="custom-text" style={{fontSize:"26px"}}>Event Name</Card.Title>
          <Card.Subtitle style={{marginBottom:"5px",fontWeight:"550"}}><FontAwesomeIcon icon={faMoneyBill} style={{ marginRight: "6px" }} />FREE</Card.Subtitle>
          <Card.Subtitle style={{marginBottom:"5px",fontWeight:"550"}}><FontAwesomeIcon icon={faCalendar} style={{ marginRight: "6px",marginTop:"8px" }} />1 April 2024</Card.Subtitle>
          <Card.Subtitle style={{marginBottom:"5px",fontWeight:"550"}}><FontAwesomeIcon icon={faLocationArrow} style={{ marginRight: "6px",marginTop:"8px" }} />SRM IST KTR</Card.Subtitle>
          <Card.Subtitle style={{marginBottom:"5px",fontWeight:"550"}}><FontAwesomeIcon icon={faPeopleGroup} style={{ marginRight: "6px",marginTop:"8px" }} />MAX 100</Card.Subtitle>
          <Card.Text className="custom-text">
          The technical event scheduled for this April will be updated soon.
          </Card.Text>
          <Button variant="primary"
        className={`custom-button ${buttonClicked ? 'clicked' : ''}`}
        onClick={handleClick}         style={{ backgroundColor: buttonClicked ? '#57abd7' : '#57abd7', borderColor: buttonClicked ? '#57abd7' : '#57abd7' }}
        >Register Now !</Button>
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
