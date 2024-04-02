import React,{useEffect,useState} from 'react'
import '../css/Bylaws.css'
import { NavLink } from "react-router-dom";

function Bylaws() { 
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
    let progressBarHandler = () => {
            
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
  }

  window.addEventListener("scroll", progressBarHandler);

  return () => window.removeEventListener("scroll", progressBarHandler);
  }, []);
  return (
    <>
    <div id="progressBarContainer">
                <div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />
            </div>
    <section className="section secn">
        <div className="container" style={{marginTop:"100px"}}>
          <div className="gbc1"></div>
          <div className="row ">
            <div className="col-md-12 text-center">
              <h1 data-aos="fade-up" data-aos-duration="1000" className="section-title">
                SIGKDD SRM KTR Student Chapter
                <span style={{ color: "var(--secondary-color)",textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7" }}>
                  {" "}
                  Bylaws
                </span>
              </h1>
            </div>
          </div>
          <div className="container" style={{ marginTop: "40px" }}>
            <div className="row">
              <div className="col-md-12" >
                <h1 className="section-title text-left art" style={{fontSize:"25px",color: "#57abd7", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7"}}>Article I: Name and Scope</h1>
                <div className="d-flex" style={{ flex: "50%" ,fontWeight:"500"}}>
                  <div>
                    <p>1. This organisation shall be called the ACM SIGKDD SRM KTR Student Chapter. In these bylaws it is referred to as the Chapter; the Association for Computing Machinery is referred to as ACM.</p>
                    <p style={{marginTop:"-5px"}}>2. The scope of the Chapter is SIGKDD Special Interest Group on Knowledge Discovery in Data.</p>
                  </div>
                </div>
                <h1 className="section-title text-left art" style={{fontSize:"25px",color: "#57abd7", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7"}}>Article II: Purpose</h1>
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
                <h1 className="section-title text-left art" style={{fontSize:"25px",color: "#57abd7", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7"}}>Article III: Membership</h1>
                <div className="d-flex" style={{ flex: "50%" ,fontWeight:"500"}}>
                  <div>
                    <p>1. Membership in the Student Chapter shall be open to all SRM IST KTR students who are ACM members, SIGKDD members, and non-members.</p>
                    <p style={{marginTop:"-5px"}}>2. Voting membership in the Chapter shall be granted to all active Chapter members.</p>
                    <p style={{marginTop:"-5px"}}>3. Membership shall not be restricted according to race, creed, age, gender, disability, nationality, sexual orientation, economic status, veteran status, or parenthood.</p>
                  </div>
                </div>
                <h1 className="section-title text-left art" style={{fontSize:"25px",color: "#57abd7", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7"}}>Article IV: Officers</h1>
                <div className="d-flex" style={{ flex: "50%" ,fontWeight:"500"}}>
                  <div>
                    <p>1. The officers of this Chapter shall be: Chair, Vice Chair, and Treasurer. These individuals must be ACM Student Members and ACM SIGKDD Members. In addition, a Faculty Sponsor with an ACM Professional Membership and ACM SIGKDD Membership is required. Other officers may also be established.</p>
                    <p style={{marginTop:"-5px"}}>2. The officers shall be elected by a plurality of votes cast at the annual election meeting or via electronic voting and serve for a minimum of one year.</p>
                    <p style={{marginTop:"-5px"}}>3. Appointment or nomination of an individual to an officer position within an ACM Chapter shall be in general limited to two full consecutive terms in the same position. This recommendation is intended to en- courage the continuing infusion of new volunteers into the organisation and to encourage office holders to give thought to planning for their successor.</p>
                  </div>
                </div>
                <h1 className="section-title text-left art" style={{fontSize:"25px",color: "#57abd7", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7"}}>Article V: Duties of Officers</h1>
                <div className="d-flex" style={{ flex: "50%" ,fontWeight:"500"}}>
                  <div>
                    <p>1. The Chair is the principal officer and is responsible for leading the Chapter and managing its activities in accordance with the policies and procedures of ACM and these bylaws.</p>
                    <p style={{marginTop:"-5px"}}>2. The Vice Chair shall preside at meetings in the absence of the Chair, assist the Chair in the management of the Chapter, and perform other duties that may be assigned by the Chair.</p>
                    <p style={{marginTop:"-5px"}}>3. The Treasurer shall keep the minutes of all Chapter meetings and maintain the Chapter’s financial records. Other duties include:</p>
                    <p style={{marginTop:"-30px"}}><br/>
  &emsp; a. Collecting dues, paying all bills, and maintaining records for the Chapter
  <br />
  &emsp; b. Preparation of the Chapter’s annual report and officer contact information, and submission of these to ACM Headquarters via the Chapter Administrative Interface
  <br />
  &emsp; c. Submission of any proposed amendment to these bylaws must be submitted to ACM Headquarters - Chapters Department. Proposed amendments must be approved before they can be submitted to the Chapter’s membership for a vote
  <br />
  &emsp; d. Perform other duties as assigned by the Chair
</p>
<p style={{marginTop:"-5px"}}>4. The Faculty Sponsor shall be a faculty member or full-time staff mem- ber of your school. Each Student Chapter has one Sponsor. The Faculty Sponsor shall be generally responsible for the activities of the Chapter. Specifically, the Sponsor:</p>
<p style={{marginTop:"-30px"}}><br/>
  &emsp; a. helps provide continuity from year to year as student leadership and personnel change
  <br />
  &emsp; b. promotes good student-faculty relationships
  <br />
  &emsp; c. helps maintain university standards in all activities of the Chapter
  <br />
  &emsp; d. exercises financial supervision, if necessary, by promoting prompt payment of bills and collection of dues, and overseeing the settlement of all accounts in the event of dissolution of the Chapter
  <br />
  &emsp; e. represents the Chapter interests to the faculty and administration
</p>
                  </div>
                </div>
                <h1 className="section-title text-left art" style={{fontSize:"25px",color: "#57abd7", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7"}}>Article VI: Meetings</h1>
                <div className="d-flex" style={{ flex: "50%" ,fontWeight:"500"}}>
                  <div>
                    <p>1. 
The Chapter shall hold meetings only in places that are open and accessible to all members of the Association.</p>
                    <p style={{marginTop:"-5px"}}>2. The annual election meeting should be held. At this meeting, the Treasur- er will present the required reports. Also, the election of officers shall be held.</p>
                    <p style={{marginTop:"-5px"}}>3. Notices of all meetings shall be distributed to all members at least one week prior to any meeting.</p>
                  </div>
                </div>
                <h1 className="section-title text-left art" style={{fontSize:"25px",color: "#57abd7", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7"}}>Article VII: Disbursements and Dues</h1>
                <div className="d-flex" style={{ flex: "50%" ,fontWeight:"500"}}>
                  <div>
                    <p>1. Disbursements from the Treasury for Chapter expenditures shall be made by any active Chapter officer and shall be included in the minutes of its meetings.</p>
                    <p style={{marginTop:"-5px"}}>2. Dues shall be fixed annually.</p>
                  </div>
                </div>
                <h1 className="section-title text-left art" style={{fontSize:"25px",color: "#57abd7", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7"}}>Article VIII: Amendment and Election Procedures</h1>
                <div className="d-flex" style={{ flex: "50%" ,fontWeight:"500"}}>
                  <div>
                    <p>1. All proposed changes to these Chapter Bylaws shall be approved by ACM Headquarters - Chapters Department before being presented to the Chapter membership for a vote.</p>
                    <p style={{marginTop:"-5px"}}>2. No official business of the Chapter shall be conducted unless a quorum is present. A quorum of the Chapter shall be defined as a majority of the voting members.</p>
                    <p style={{marginTop:"-5px"}}>3. Officers will be elected by a plurality of votes cast.</p>
                  </div>
                </div>
                <h1 className="section-title text-left art" style={{fontSize:"25px",color: "#57abd7", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7"}}>Article IX: Code of Conduct</h1>
                <div className="d-flex" style={{ flex: "50%" ,fontWeight:"500"}}>
                  <div>
                    <p>1. Harassment or hostile behavior is unwelcome, including speech that intimidates, creates discomfort, or interferes with a person’s participation or opportunity for participation, in a Chapter meeting or Chapter event. Harassment in any form, including but not limited to harassment based on alienage or citizenship, age, color, creed, disability, marital status, mil- itary status, national origin, pregnancy, childbirth and pregnancy-relat- ed medical conditions, race, religion, sex, gender, veteran status, sexual orientation or any other status protected by laws in which the Chapter meeting or Chapter event is being held, will not be tolerated. Harass- ment includes the use of abusive or degrading language, intimidation, stalking, harassing photography or recording, inappropriate physical contact, sexual imagery and unwelcome sexual attention. A response that the participant was “just joking,” or “teasing,” or being “playful,” will not be accepted.</p>
                    <p style={{marginTop:"-5px"}}>2. Anyone witnessing or subject to unacceptable behavior should notify a Chapter officer or ACM Headquarters.</p>
                    <p style={{marginTop:"-5px"}}>3. Individuals violating these standards may be sanctioned or excluded from further participation at the discretion of the Chapter officers or responsible committee members.</p>
                  </div>
                </div>
                <h1 className="section-title text-left art" style={{fontSize:"25px",color: "#57abd7", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7"}}>Article X: Dissolution of the Chapter</h1>
                <div className="d-flex" style={{ flex: "50%" ,fontWeight:"500"}}>
                  <div>
                    <p>1. Dissolution of this Chapter by consent of the members shall consist of unanimous agreement of all its officers together with a majority vote at a meeting which has been publicized in advance to all members of the Chapter for the purpose of taking this vote..</p>
                    <p style={{marginTop:"-5px"}}>2. Should this Chapter be dissolved, its assets and liabilities shall be trans- ferred to ACM and shall be supervised by the ACM Director of Finance. Funds given to the chapter from the University shall be returned to the University.</p>
                  </div>
                </div>
                <NavLink target='_blank' rel='noreffer' to='https://www.acm.org/about-acm/acm-bylaws' className="bbt join-button btn join-button-container" style={{fontWeight:"bold"}}>
                  For More Information Click Here
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Bylaws