import React from "react";
import Blogcard from "../components/blogs/blogcard/Blogcard";
import "../css/Blogs.css"
function Blogs() {
  return (
    <>
      <section className="landing-section section h-70vh" style={{ marginTop: "220px" }}>
        <div className="container" style={{ marginTop: "-110px" }}>
          <div className="gbc1"></div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 text-center mobtitle">
              <h1 className="title mobblogtitle " style={{marginBottom:"40px"}}>
                Our{" "}
                <span style={{ color: "var(--secondary-color)", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7" }}>
                 Blogs
                </span>{" "}
              </h1>
            </div>
          </div>
          <div className="blog-card-container">
            <Blogcard
              imgSrc="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
              title="Blog Title"
              aboutblog="Creator Name"
              role="Member"
              Mediumlink="https://www.linkedin.com/in/"
            />
            <Blogcard
              imgSrc="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
              title="Blog Title"
              aboutblog="Creator Name"
              role="Member"
              Mediumlink="https://www.linkedin.com/in/"
            />
           <Blogcard
              imgSrc="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
              title="Blog Title"
              aboutblog="Creator Name"
              role="Member"
              Mediumlink="https://www.linkedin.com/in/"
            />
            <Blogcard
              imgSrc="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
              title="Blog Title"
              aboutblog="Creator Name"
              role="Member"
              Mediumlink="https://www.linkedin.com/in/"
            />
            <Blogcard
              imgSrc="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
              title="Blog Title"
              aboutblog="Creator Name"
              role="Member"
              Mediumlink="https://www.linkedin.com/in/"
            />
            <Blogcard
              imgSrc="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
              title="Blog Title"
              aboutblog="Creator Name"
              role="Member"
              Mediumlink="https://www.linkedin.com/in/"
            />
            <Blogcard
              imgSrc="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
              title="Blog Title"
              aboutblog="Creator Name"
              role="Member"
              Mediumlink="https://www.linkedin.com/in/"
            />
            <Blogcard
              imgSrc="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
              title="Blog Title"
              aboutblog="Creator Name"
              role="Member"
              Mediumlink="https://www.linkedin.com/in/"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
