import React from "react";
import "../css/Team.css";
import ProfileCard from "../components/team/ProfileCard";
// eslint-disable-next-line
import TeamCarousel from "../components/team/TeamCarousel";
import Tab from "../components/team/tabbar/Tab";
import TabContent from "../components/team/tabbar/TabContent";
// eslint-disable-next-line
import Sample from "../assets/CoreMembers/Sample.png";
import Sahil from "../assets/CoreMembers/Sahil.jpg";
import Aditya from "../assets/CoreMembers/Aditya.jpg";
import Kalpana from "../assets/CoreMembers/kalpana.png";
import Shanky from "../assets/CoreMembers/Shanky.jpg";
import Dheeraj from "../assets/CoreMembers/Dheeraj.jpg";
import Ayush from "../assets/CoreMembers/Ayush.png";
import Yamika from "../assets/CoreMembers/yamika.jpeg";
import Medha from "../assets/CoreMembers/medha.jpeg";
import Vaibhav from "../assets/CoreMembers/vaibhav.jpeg";
import Krishna from "../assets/CoreMembers/krishna.jpeg";
import Saptarishi from "../assets/CoreMembers/saptrishi.jpeg";
import Himanshu from "../assets/CoreMembers/himanshu.jpeg";
import PCKar from "../assets/CoreMembers/drpckar.jpeg";
import Vishal from "../assets/Developers/vishal.png";
import Ansh from "../assets/CoreMembers/ansh.png";
import Gupta from "../assets/Developers/gupta.png";
import Samplee from "../assets/CoreMembers/Samplee.png";
import Srijita from "../assets/CoreMembers/srijita.jpeg"

function Team() {
  return (
    <>
      <div className="gbc1"></div>
      <ul className="nav nav-tabs justify-content-center" role="tablist"  style={{marginTop:"130px"}}>
        <Tab
          className="nav-link tab-btn active"
          id="year2023-tab"
          targetID="#year2023-tab-pane"
          title="2024 - 2025"
          selected="true"
        />
        {/* <Tab
          className="nav-link tab-btn"
          id="year2024-tab"
          targetID="#year2024-tab-pane"
          title="2025 - 2026"
          selected="false"
        /> */}
      </ul>
      <div className="tab-content">
        <TabContent
          id="year2023-tab-pane"
          tab="year2023-tab"
          className="tab-pane fade show active"
          content={
            <section className="section">
              <div className="container">
                <div className="bbc1"></div>
                <div className="row">
                  <div className="text-center">
                    <div className="section-title">
                      <h1>
                        Meet Our{" "}
                        <span style={{ color: "var(--secondary-color)" }}>
                          TEAM of developers, designers and creators<span style={{ color: "#57abd7", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7, 0 0 30px #57abd7" }}>
  <br/>[ FOUNDERS ]
</span>

                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
                <ul
                  className="nav nav-tabs justify-content-center"
                  role="tablist"
                >
                  <Tab
                    className="nav-link tab-btn"
                    id="faculty-tab"
                    targetID="#faculty-tab-pane"
                    title="Faculty"
                    selected="false"
                  />
                  <Tab
                    className="nav-link tab-btn active"
                    id="chapterlead-tab"
                    targetID="#chapterlead-tab-pane"
                    title="Core Team"
                    selected="false"
                  />
                  <Tab
                    className="nav-link tab-btn"
                    id="technical-tab"
                    targetID="#technical-tab-pane"
                    title="R&D Team"
                    selected="false"
                  />
                  <Tab
                    className="nav-link tab-btn"
                    id="webappdev-tab"
                    targetID="#webappdev-tab-pane"
                    title="Web/App Dev Team"
                    selected="false"
                  />
                  <Tab
                    className="nav-link tab-btn"
                    id="event-tab"
                    targetID="#event-tab-pane"
                    title="Corporate Team"
                    selected="false"
                  />
                  <Tab
                    className="nav-link tab-btn"
                    id="design-tab"
                    targetID="#design-tab-pane"
                    title="Creatives Team"
                    selected="false"
                  />
                </ul>
                <div className="tab-content tab-btn">
                  <TabContent
                    id="chapterlead-tab-pane"
                    tab="chapterlead-tab"
                    className="tab-pane fade active show"
                    content={
                      <>
                        <ProfileCard
                          img={Aditya}
                          name="Aditya Verma"
                          role="Chairperson (Lead)"
                          linkedinUrl="https://www.linkedin.com/in/"
                          githubUrl="https://github.com/ADITYAVOFFICIAL/"
                        />
                        <ProfileCard
                          img={Sahil}
                          name="Sahil Adhikari"
                          role="Vice-Chairperson"
                          linkedinUrl="https://www.linkedin.com/in/sahil-adhikari-57b445250/"
                          githubUrl="https://github.com/sahilopl"
                        />
                        <ProfileCard
                          img={Gupta}
                          name="Aditya Gupta"
                          role="Web Master"
                          linkedinUrl="https://www.linkedin.com/in/aditya-gupta-475328252"
                          githubUrl="https://github.com/AdityaGupta0001"
                        />
                        <ProfileCard
                          img={Yamika}
                          name="Yamika Chauhan"
                          role="Secretary"
                          linkedinUrl="https://www.linkedin.com/in/yamika-chauhan-442235207/"
                          githubUrl="https://github.com/yambamfam"
                        />
                        <ProfileCard
                          img={Medha}
                          name="Medha "
                          role="Treasurer"
                          linkedinUrl="https://www.linkedin.com/in/medha-srivastava-82257b252"
                          githubUrl="https://github.com/khushicbilko"
                        />
                        <ProfileCard
                          img={Vaibhav}
                          name="Vaibhav Singh"
                          role="Membership Chairperson "
                          linkedinUrl="https://www.linkedin.com/in/vaibhav-singh-b66969280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          githubUrl="https://github.com/Vaibhav964724"
                        />
                      </>
                    }
                  />
                  <TabContent
                    id="technical-tab-pane"
                    tab="technical-tab"
                    className="tab-pane fade show"
                    content={
                      <>
                       <ProfileCard
                          img={Vishal}
                          name="Vishal Mohan Nair "
                          role="R&D Head"
                          linkedinUrl="https://www.linkedin.com/in/vishal-mohan-nair-6130a1177/"
                          githubUrl="https://github.com/Whis2903"
                        />
                        <ProfileCard
                          img={Saptarishi}
                          name="Saptarishi Sarkar"
                          role="R&D Lead"
                          linkedinUrl="https://www.linkedin.com/in/saptarishi-sarkar-b9813424b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          githubUrl="https://github.com/Saptarishi-S"
                        />
                      </>
                    }
                  />
                  <TabContent
                    id="faculty-tab-pane"
                    tab="faculty-tab"
                    className="tab-pane fade show"
                    content={
                      <>
                        <ProfileCard
                          img={Kalpana}
                          name="Dr. Kalpana AV"
                          role="Faculty Co-ordinator"
                          // linkedinUrl="https://www.linkedin.com/in/"
                        />
                         <ProfileCard
                          img={PCKar}
                          name="Dr. PC Karthik"
                          role="Faculty Sponsor"
                          linkedinUrl="https://www.linkedin.com/in/karthik-chandrasekaran-9667b4164/?originalSubdomain=in"
                        />
                      </>
                    }
                  />
                  <TabContent
                    id="design-tab-pane"
                    tab="design-tab"
                    className="tab-pane fade show"
                    content={
                      <>
                        <ProfileCard
                          img={Dheeraj}
                          name="Dheeraj Sharma"
                          role="Creatives Head"
                          linkedinUrl="https://www.linkedin.com/in/dheeraj-sharma-97251120b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                          githubUrl="https://github.com/dheeraj5988"
                        />
                        {/* <ProfileCard
                          img={Sample}
                          name="Lead Name"
                          role="Creatives Lead"
                          linkedinUrl="https://www.linkedin.com/in/"
                          githubUrl="https://github.com/"
                        /> */}
                      </>
                    }
                  />
                  <TabContent
                    id="event-tab-pane"
                    tab="event-tab"
                    className="tab-pane fade show"
                    content={
                      <>
                        <ProfileCard
                          img={Ayush}
                          name="Ayush Panwar"
                          role="Corporate Head"
                          linkedinUrl="https://www.linkedin.com/in/ayush-panwar-697639251/"
                          githubUrl="https://github.com/AyushPanwar0705"
                        />
                         <ProfileCard
                          img={Ansh}
                          name="Ansh Semwal"
                          role="Corporate Head"
                          linkedinUrl="https://www.linkedin.com/in/ansh-semwal-52518a301/"
                          githubUrl="https://github.com/anshsemwal"
                        />
                         <ProfileCard
                          img={Krishna}
                          name="Krishna Mahajan "
                          role="Corporate Lead"
                          linkedinUrl="https://www.linkedin.com/in/krishna-mahajan8764?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          githubUrl="https://github.com/KRISHNA140504"
                        />
                        {/* <ProfileCard
                          img={Srijita}
                          name="Srijita Seth"
                          role="PR Lead"
                          linkedinUrl="https://www.linkedin.com/in/srijita-seth-365b9a262/"
                          githubUrl="https://github.com/Srijitaseth"
                        /> */}
                      </>
                    }
                  />
                  <TabContent
                    id="webappdev-tab-pane"
                    tab="webappdev-tab"
                    className="tab-pane fade show"
                    content={
                      <>
                         <ProfileCard
                          img={Shanky}
                          name="Adityasankar"
                          role="Web/App Dev Head"
                          linkedinUrl="https://www.linkedin.com/in/adityasankar-sengupta/"
                          githubUrl="https://github.com/adityasankar5"
                        />
                        <ProfileCard
                          img={Himanshu}
                          name="Himanshu Sharma"
                          role="Web/App Dev Lead"
                          linkedinUrl="https://www.linkedin.com/in/himanshuexe/"
                          githubUrl="https://github.com/himuexe"
                        />
                      </>
                    }
                  />
                </div>
              </div>
            </section>
          }
        />
        <TabContent
          id="year2024-tab-pane"
          tab="year2024-tab"
          className="tab-pane fade show"
          content={
            <section className="section" style={{ paddingTop: "40px" }}>
              <div className="container">
                <div className="row">
                  <div className="text-center">
                    <div className="section-title">
                      <h1>
                        Next Team{" "}
                        <span style={{ color: "var(--secondary-color)" }}>
                          Comming soon...
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
        />
      </div>
    </>
  );
}

export default Team;
