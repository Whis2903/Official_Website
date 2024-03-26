import React from 'react'
import '../css/Home.css'
import BlogSection from '../components/home/blogsection/BlogSection'
import LandingSection from '../components/home/landingsection/LandingSection'
import PastEvents from '../components/home/pastevents/PastEvents'
import UpcomingEvent from '../components/home/upcomingsection/UpcomingEvent'
import SponsorSection from '../components/home/sponsorsection/SponsorSection'
import FaqSection from "../components/home/faqsection/FaqSection"
import { InstagramEmbed } from 'react-social-media-embed'
import TeamCarousel from "../components/team/TeamCarousel";

function Home() { 
  return (
    <>
    <LandingSection
        chaptername="SRM IST KTR"
        description="Dive into the exciting domains of Data Science, Machine Learning, Deep Learning, and Natural Language Processing with us. Join our community of passionate learners and innovators as we explore the cutting-edge technologies shaping the future"
        link="/team"
      />
    <UpcomingEvent />
    <TeamCarousel />
    <FaqSection/>
    <SponsorSection />
    {/* <PastEvents /> */}
    {/* <BlogSection /> */}
    
    {/* <div style={{ display: 'flex', justifyContent: 'center',marginBottom:"50px"}}>
  <InstagramEmbed url="https://www.instagram.com/srmsigkdd" width={500} style={{borderRadius:"15px"}}/>
</div> */}
    </>
  )
}

export default Home