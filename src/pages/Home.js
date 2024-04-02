import React from 'react'
import '../css/Home.css'
// eslint-disable-next-line
import LandingSection from '../components/home/landingsection/LandingSection'
// eslint-disable-next-line
import UpcomingEvent from '../components/home/upcomingsection/UpcomingEvent'
import SponsorSection from '../components/home/sponsorsection/SponsorSection'
// eslint-disable-next-line
import { InstagramEmbed } from 'react-social-media-embed'
import TeamCarousel from "../components/team/TeamCarousel";
import Domains from '../components/home/domains/Domains'

function Home() { 
  return (
    <>
    <LandingSection
    className="infoo"
        chaptername="SRM IST KTR"
        description="Dive into the exciting domains of Data Science, Machine Learning, Deep Learning, and Natural Language Processing with us. Join our community of passionate learners and innovators as we explore the cutting-edge technologies shaping the future"
        link="/team"
      />
    {/* <UpcomingEvent /> */}
    <Domains/>
    <TeamCarousel />
    <div className='container'></div>
    <SponsorSection />
    
    {/* <div style={{ display: 'flex', justifyContent: 'center',marginBottom:"50px"}}>
  <InstagramEmbed url="https://www.instagram.com/srmsigkdd" width={500} style={{borderRadius:"15px"}}/>
</div> */}
    </>
  )
}

export default Home