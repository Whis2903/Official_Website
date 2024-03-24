import React, { useState, useRef } from "react";
import { Carousel } from "react-bootstrap";
import Sample from "../../assets/Events/sample.png"
import YouTube from "react-youtube";
import "./teamslide.css";

function TeamCarousel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [quality, setQuality] = useState("hd1080"); // Set quality to 1080p
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (playerRef.current) {
      isPlaying ? playerRef.current.pauseVideo() : playerRef.current.playVideo();
    }
  };

  return (
    <section className="section">
      <div className="container conty">
        <div className="row justify-content-center">
          <div className="col-sm-5 col-lg-9 w-100vw">
            <Carousel fade slide className="carousel-glow" interval={null}>
              <Carousel.Item>
                <div style={{ width: "100%", height: "100%", borderRadius: "22px", overflow: "hidden" }}>
                  <YouTube
                    videoId="JKHIe_Wxm4s"
                    opts={{ width: "100%", height: "500px", playerVars: { autoplay: 0, modestbranding: 1, controls: 0, quality: quality } }}
                    onReady={(event) => {
                      playerRef.current = event.target;
                      setIsPlaying(false);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img src={Sample} className="d-block w-100" alt="Core Team" />
                <Carousel.Caption>
                  <h5 className="eventname">Our First Event</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamCarousel;
