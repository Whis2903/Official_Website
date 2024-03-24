import React from "react";
import Sample from "../assets/Events/sample.png";

function copyLink() {
  var link = window.location.href;
  navigator.clipboard.writeText(link);
  alert("Link Copied");
}
function shareOnWhatsApp() {
  var link = window.location.href;
  window.open("https://wa.me/?text=" + link);
}

function JoinCommunity() {
  return (
    <>
      <section className="section">
        <div className="container" style={{marginTop:"80px"}}>
          <div className="gbc1"></div>
          <div className="row ">
            <div className="col-md-12 text-center">
              <h1 className="section-title">
                Join
                <span style={{ color: "var(--secondary-color)" }}>
                  {" "}
                  Community
                </span>
              </h1>
              <p className="section-subtitle">
                We are a community of students where we provide the coding
                culture for the students who are interested in Computer Science
                and other core technical competencies. We will provide you the
                opportunities to enhance your coding skills and take them to the
                next level.
              </p>
            </div>
            <ul className="list-unstyled text-center">
              {/* <li className="list-inline-item">
                <a
                  className="btn btn-primary"
                  style={{ background: "#7289DA" }}
                  href="https://discord.gg/"
                >
                  <i className="bi bi-discord"></i> Join Discord
                </a>
              </li> */}
              <li className="list-inline-item" style={{marginBottom:"10px"}}>
                <a
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#d6249f",
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                  }}
                  href="https://www.instagram.com/srmsigkdd"
                >
                  <i className="bi bi-instagram"></i> Follow us on Instagram
                </a>
              </li>
              <li className="list-inline-item" style={{marginBottom:"10px"}}>
                <a
                  className="btn btn-primary"
                  style={{ background: "#1DA1F2" }}
                  href="https://www.linkedin.com/company/acmsigkddsrm"
                >
                  <i className="bi bi-linkedin"></i> Follow us on LinkedIn
                </a>
              </li>
              <li className="list-inline-item" style={{marginBottom:"10px"}}>
                <a
                  className="btn btn-primary"
                  style={{ background: "#25D366" }}
                  href
                  onClick={shareOnWhatsApp}
                >
                  <i className="bi bi-whatsapp"></i> Share on WhatsApp
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-primary"
                  style={{ background: "#808080" }}
                  href
                  onClick={copyLink}
                >
                  <i className="bi bi-link-45deg"></i> Copy Joining Link
                </a>
              </li>
            </ul>
          </div>
          <div className="container" style={{ marginTop: "100px" }}>
            <div className="row">
              <div className="col-md-12">
                <h1 className="section-title text-center">How to join Club?</h1>
                <div className="d-flex" style={{ flex: "50%" ,fontWeight:"500"}}>
                  <div>
                    <p>1. Click on the Typeform Link.</p>
                    <p>2. Enter all the details</p>
                    <p>3. Then, click the "Submit" button.</p>
                    <p>
                      4. Wait for conformation Email.
                    </p>
                    <p>
                      5. If you are selected you will recieve an intervirew mail
                    </p>
                    <p>6. If you are found fit for the role you will be inducted in the club</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center">
              <img
                src={Sample}
                alt="Sammple"
                style={{ width: "55rem", height: "auto" ,borderRadius:"20px",marginTop:"30px",maxWidth:"100%"}}
              />
            </div>
        </div>
      </section>
    </>
  );
}

export default JoinCommunity;
