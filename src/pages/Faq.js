import React from "react";
import "../css/Faq.css";
import { Accordion } from "react-bootstrap";
const Faq = (props) => {
  return (
    <>
      <section className="landing-section section h-70vh lan" style={{marginBottom:'70px'}}>
        <div className="container classy">
          <div className="gbc1"></div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 text-center">
              <h1 className="title">
              Frequently
                <br />
                <span style={{ color: "var(--secondary-color)" }}>
                asked questions
                </span>{" "}
              </h1>
            </div>
          </div>
          <div className="container">
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. What is the full form of ACM?</Accordion.Header>
        <Accordion.Body>
        The ACM (Association for Computing Machinery), founded in 1947, is the largest and oldest international scientific and industrial computer society.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. What is the full form of SIGKDD?</Accordion.Header>
        <Accordion.Body>
        SIGKDD - Special Interest Group on Knowledge Discovery in Data
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3. What are Member Benefits provided to SIGKDD Members:</Accordion.Header>
        <Accordion.Body>
        <ol>
  <li>Receive the hardcopy SIGKDD Explorations newsletter twice a year.</li>
  <li>Substantial discount on the registration fee for the annual KDD international conference. A single registration fee includes passes to all paper sessions, free tutorials, workshops, and food services, including lunches, breakfasts, receptions, and coffee and snack breaks.</li>
  <li>Reduced registration rates at conferences co-sponsored by SIGKDD</li>
  <li>Access to following content on ACM Digital Library:
    <ul>
      <li>Proceedings of conferences sponsored by SIGKDD</li>
      <li>Some conferences and workshops sponsored by SIGKDD</li>
    </ul>
  </li>
  <li>Voting rights in SIGKDD elections and in decisions put up for a vote at SIGKDD business meetings held usually at the annual conference.</li>
  <li>USB Flash Drive containing SIGKDD proceedings in years when it is produced</li>
  <li>Financial support for some student members to attend the SIGKDD conference (competitive)</li>
  <li>Notification of conferences, through mail and the SIGKDD electronic member mailing list SIGKDD-ANNOUNCE</li>
  <li>Documentation and publishing of videos of KDD conference presentations if a conference decides to video-recording presentations.</li>
  <li>Support networking and career services via LinkedIn and other sites</li>
</ol>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>4. What are Community Benefits provided by SIGKDD</Accordion.Header>
        <Accordion.Body>
        <ol>
  <li>Sponsorship of the KDD annual conference, including:
    <ul>
      <li>KDD Best Research Paper, Best Application Paper, and Best Student Paper awards at the SIGKDD conference.</li>
      <li>Student travel support to the KDD conference.</li>
    </ul>
  </li>
  <li>Co-sponsorship of the WSDM conference on Web Search and Data Mining.</li>
  <li>Sponsorship of the KDD Cup and maintenance of the KDD Cup website.</li>
  <li>Annual SIGKDD Innovation and Service awards.</li>
  <li>Annual SIGKDD Dissertation Award.</li>
  <li>Annual SIGKDD Text-of-Time Paper Award.</li>
  <li>SIGKDD website, offering archives of SIGKDD Explorations.</li>
  <li>Support for ACM competitions in Data Mining for the ACM Bay Area Chapter.</li>
  <li>Support for selected activities of SIGKDD Chapters.</li>
  <li>Support for industry standardization efforts.</li>
  <li>Support for data science education efforts.</li>
  <li>Maintenance of the new SIGKDD and KDD Conference websites featuring state-of-the-art sharing and social media connections.</li>
  <li>SIGKDD Impact Program supports projects that promote data science, increase its impact on society, and help the data science community.</li>
</ol>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>5. Do I need to have prior experience in tech to join?</Accordion.Header>
        <Accordion.Body>
        No, prior experience in tech is not a requirement to join our college club. For first-year students, no prior experience is necessary; we welcome all levels of interest and enthusiasm for technology. However, as students progress through their academic journey, especially entering the second year, having a strong foundation in relevant curriculum becomes increasingly beneficial.<br/><br/> By the time students reach their third year and beyond, a more substantial background in tech-related subjects is preferred, as the club's activities and projects often involve advanced concepts and practical applications. Regardless of experience level, we encourage all students with an interest in technology to join our club, as we provide opportunities for learning, growth, and collaboration for members at every stage of their academic and technical development.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>6. Does the club offer resources or mentorship for learning new technologies?</Accordion.Header>
        <Accordion.Body>
        <ol>
        <strong>Yes,</strong> we provide resources and mentorship to our members, fostering an environment where they can readily access support and guidance, empowering them to enhance their skills and remain abreast of the latest advancements in the field.<br/><br/>
        <strong>We also provide,</strong><br/><br/>
  <li style={{marginBottom:"5px"}}><strong>Workshops and Training Sessions:</strong> We organize workshops and training sessions where experienced professionals or fellow students share their expertise on various technologies used in data science, such as programming languages, machine learning frameworks, data visualization tools, etc.</li>
  <li style={{marginBottom:"5px"}}><strong>Mentorship Programs:</strong> We facilitate mentorship programs where experienced members or professionals from industry guide and support students who are eager to learn new technologies. These mentorship relationships can be formal or informal, depending on the needs and preferences of the participants.</li>
  <li style={{marginBottom:"5px"}}><strong>Resource Sharing:</strong> We maintain a repository of learning resources, including online courses, tutorials, books, and articles, to help members explore and master new technologies at their own pace.</li>
  <li style={{marginBottom:"5px"}}><strong>Collaborative Projects:</strong> We encourage collaboration on projects that involve the application of cutting-edge technologies in data science. Working on such projects provides hands-on experience and opportunities to learn from peers who are proficient in specific technologies.</li>
  <li><strong>Networking Opportunities:</strong> We facilitate networking opportunities with professionals and experts in the field through events like guest lectures, panel discussions, and networking sessions. Building connections with industry professionals can open doors to learning opportunities and mentorship.</li>
</ol>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>

        </div>
      </section>
    </>
  );
};

export default Faq;
