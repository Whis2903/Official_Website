import React from "react";
import "./TimeStamp.css";

function TimeStamp(props) {
  return (
    <>
      <div className="custom-container d-grid">
        <div className="poster">
          <img alt="" src={props.img} />
          <div className="overlay">
            <a className="register-button" href={props.url}>Register</a>
          </div>
        </div>
        <div className="timestamp">
          <i></i>
          <span className="text text-muted">{props.title}</span>
        </div>
      </div>
    </>
  );
}

export default TimeStamp;
