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
                SIGKDD SRM KTR Student Chapter
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
  1. The Chapter is organized and will be operated exclusively for educational and scientific purposes to promote the following:</p>
  <p style={{marginTop:"-30px"}}><br/>
  &emsp; a. An increased knowledge of and greater interest in SIGKDD Special Interest Group on Knowledge Discovery in Data.
  <br />
  &emsp; b. Greater interest in computing and its applications.
  <br />
  &emsp; c. A means of communication between persons having an interest in computing.
</p>

                    <p style={{marginTop:"3px"}}>2. The Chapter will serve students at SRM Institute of Science and Technology Kattankulathur and other interested persons in the community.</p>
                    <p style={{marginTop:"3px"}}>3. This Chapter is chartered by ACM. It is formed and will operate under the sponsorship of ACM and the SIG Governing Board.</p>
                  </div>
                </div>
                <h1 className="section-title text-left" style={{fontSize:"25px"}}>Article III: Membership</h1>
                <div className="d-flex" style={{ flex: "50%" ,fontWeight:"500"}}>
                  <div>
                    <p>1. Membership in the Student Chapter shall be open to all SRM IST KTR students who are ACM members, SIGKDD members, and non-members.</p>
                    <p style={{marginTop:"-5px"}}>2. Voting membership in the Chapter shall be granted to all active Chapter members.</p>
                    <p style={{marginTop:"-5px"}}>3. Membership shall not be restricted according to race, creed, age, gender, disability, nationality, sexual orientation, economic status, veteran status, or parenthood.</p>
                  </div>
                </div>
                <h1 className="section-title text-left" style={{fontSize:"25px"}}>Article IV: Officers</h1>
                <div className="d-flex" style={{ flex: "50%" ,fontWeight:"500"}}>
                  <div>
                    <p>1. The officers of this Chapter shall be: Chair, Vice Chair, and Treasurer. These individuals must be ACM Student Members and ACM SIGKDD Members. In addition, a Faculty Sponsor with an ACM Professional Membership and ACM SIGKDD Membership is required. Other officers may also be established.</p>
                    <p style={{marginTop:"-5px"}}>2. The officers shall be elected by a plurality of votes cast at the annual election meeting or via electronic voting and serve for a minimum of one year.</p>
                    <p style={{marginTop:"-5px"}}>3. Appointment or nomination of an individual to an officer position within an ACM Chapter shall be in general limited to two full consecutive terms in the same position. This recommendation is intended to en- courage the continuing infusion of new volunteers into the organisation and to encourage office holders to give thought to planning for their successor.</p>
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