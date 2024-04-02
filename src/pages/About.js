import React,{useState,useEffect} from 'react'
import '../css/About.css'
import Focus from '../components/about/focus/Focus'

function About() { 
  const [scroll, setScroll] = useState(0);

    useEffect(() => {

        let progressBarHandler = () => {
            
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScroll(scroll);
        }

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);
    });

  return (
    <>
    <div id="progressBarContainer">
                <div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />
            </div>
    <section className="landing-section section h-70vh" style={{marginTop:"220px"}}>
        <div className="container" style={{ marginTop: "-110px" }}>
          <div className="gbc1"></div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 text-center mobtitle">
              <h1 className="title">
                About{" "}
                <span style={{ color: "var(--secondary-color)",textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7" }}>
                 Us
                </span>{" "}
              </h1>
            </div>
          </div>
          <div className="container">
                <div className="d-flex" style={{ flex: "50%" ,fontWeight:"500"}}>
                  <div>
                    <p className='textt'>The ACM SIGKDD Student Chapter at SRM KTR Campus is a dynamic community of students passionate about data science and its applications. As an official student chapter of ACM SIGKDD (Special Interest Group on Knowledge Discovery in Data), we are committed to fostering a culture of innovation, learning, and collaboration in the field of data science.</p>
                  </div>
                </div>
  <div className="content">
  <Focus/>
  </div>
</div>
        </div>
      </section>
    </>
  )
}

export default About