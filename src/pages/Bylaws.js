import React from 'react'
import '../css/Home.css'

function Bylaws() { 
  return (
    <>
    <section className="section">
        <div className="container" style={{marginTop:"80px"}}>
          <div className="gbc1"></div>
          <div className="row ">
            <div className="col-md-12 text-center">
              <h1 className="section-title">
                SIGKDD Chapter
                <span style={{ color: "var(--secondary-color)" }}>
                  {" "}
                  Bylaws
                </span>
              </h1>
            </div>
          </div>
          <div className="container" style={{ marginTop: "40px" }}>
            <div className="row">
              <div className="col-md-12">
                <h1 className="section-title text-left" style={{fontSize:"25px"}}>Article I: Name and Scope</h1>
                <div className="d-flex" style={{ flex: "50%" ,fontWeight:"500"}}>
                  <div>
                    <p>1. This organisation shall be called the ACM SIGKDD SRM KTR Student Chapter. In these bylaws it is referred to as the Chapter; the Association for Computing Machinery is referred to as ACM.</p>
                    <p style={{marginTop:"-5px"}}>2. The scope of the Chapter is SIGKDD Special Interest Group on Knowledge Discovery in Data.</p>
                  </div>
                </div>
                <h1 className="section-title text-left" style={{fontSize:"25px"}}>Article II: Purpose</h1>
                <div className="d-flex" style={{ flex: "50%" ,fontWeight:"500"}}>
                  <div>
                  <p>
  1. The Chapter is organized and will be operated exclusively for educational and scientific purposes to promote the following:
  <br />
  <br/>
  &emsp; a. An increased knowledge of and greater interest in SIGKDD Special Interest Group on Knowledge Discovery in Data.
  <br />
  &emsp; b. Greater interest in computing and its applications.
  <br />
  &emsp; c. A means of communication between persons having an interest in computing.
</p>

                    <p style={{marginTop:"3px"}}>2. The Chapter will serve students at SRM Institute of Science and Technology Kattankulathur and other interested persons in the community.
</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Bylaws