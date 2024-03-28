import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import CreatorCard from "./CreatorCard";
import "./Footer.css";
import Verma from "../../assets/CoreMembers/Aditya.jpg";


function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <footer>
        <div className="main-footer container">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="footer-container d-flex flex-wrap justify-content-evenly text-center">
                <div className="col-lg-3">
                  <h3 className="footer-section-title">Follow Us</h3>
                  <ul className="social-links list-unstyled text-center pt-4">
                    <li className="list-inline-item">
                      <a href="https://github.com/ACM-SIGKDD-SRM-KTR-STUDENT-CHAPTER" target="_blank" rel="noreferrer">
                        <i className="bi bi-github"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/company/acmsigkddsrm" target="_blank" rel="noreferrer">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/srmsigkdd" target="_blank" rel="noreferrer">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://linktr.ee/srmsigkdd" target="_blank" rel="noreferrer">
                        <i className="bi bi-tree"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.kdd.org/" target="_blank" rel="noreferrer">
                        <i className="bi bi-book"></i>
                      </a>
                    </li>
                  </ul>
                  <p className="bottom-line">Get. Set. Discover</p>
                </div>
                <div className="col-lg-5">
                  <h3 className="footer-section-title">Contact Us</h3>
                  <ul className="contact-list list-unstyled">
                    <li className="list-item">
                      <i className="bi bi-envelope"></i>
                      <a href="mailto:srmsigkdd@gmail.com">
                        srmsigkdd@gmail.com
                      </a>
                    </li>
                    <li className="list-item">
                      <i className="bi bi-geo-alt-fill"></i>
                      <a href="https://www.google.com/maps/place/SRM+University,+Kattankulathur,+Tamil+Nadu+603203/@12.8194041,80.0367139,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f76c4db87a47:0x341fa471f8027d68!8m2!3d12.8193124!4d80.0393459!16s%2Fg%2F11f7b3plgj?entry=ttu">UB, SRM Institute of Science and Technology, Kattankulkathur, Chennai [603203]
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <h3 className="footer-section-title" style={{color:"white",fontWeight:"bold"}}>Made By</h3>
                  <Carousel className="footer-carousel" fade indicators={false} controls={false} interval={2000}>
                  <Carousel.Item>
                          <CreatorCard
                            img={Verma}
                            title="Aditya Verma"
                            role="Chairperson"
                          />
                  </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div className="copyright text-center">
                <p style={{ color: "white", fontWeight: "bold", marginRight: isMobile ? "0px" : "170px" }}>
                  &copy; {isMobile ? "2024" : "2024 Made ❤️ with by"}
                  <NavLink to="#"> SIGKDD Student Chapter SRM KTR </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
