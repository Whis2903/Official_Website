import React from "react";
import Blogcard from "../components/blogs/blogcard/Blogcard";
import "../css/Blogs.css";

function Blogs() {
  return (
    <>
      <section className="landing-section section h-70vh" style={{ marginTop: "220px" }}>
        <div className="container" style={{ marginTop: "-110px" }}>
          <div className="gbc1"></div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 text-center mobtitle">
              <h1 className="title mobblogtitle " style={{ marginBottom: "40px" }}>
                Our{" "}
                <span style={{ color: "var(--secondary-color)", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7" }}>
                  Blogs
                </span>{" "}
              </h1>
            </div>
          </div>
          <div className="blog-card-container">
            <Blogcard
              imgSrc="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*AMm6E7rpmHT4ca30cIiY2Q.png"
              title="From Words to Graphs: How Deep Graph Learning is Revolutionising NLP"
              aboutblog="ADITYA VERMA"
              role="Chairperson"
              Mediumlink="https://medium.com/data-science-community-srm/deep-graph-learning-193cc0f6dd18"
            />
            <Blogcard
              imgSrc="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png"
              title="GANs in Big Data Analytics and Data Science"
              aboutblog="ADITYA VERMA"
              role="Chairperson"
              Mediumlink="https://medium.com/@adityaver/gans-in-big-data-analytics-and-data-science-95caa0cc2054"
            />
            <Blogcard
              imgSrc="https://miro.medium.com/v2/resize:fit:550/format:webp/1*NTsKP3ALyAYrL3l66x-wZw.jpeg"
              title="The Impact of Hackathons on Learning: A Personal Reflection"
              aboutblog="Vishal Mohan Nair"
              role="R&D HEAD"
              Mediumlink="https://medium.com/@vishalmadridrox/the-impact-of-hackathons-on-learning-a-personal-reflection-b5295735c3e1"
            />    
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
