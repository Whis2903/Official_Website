import React from 'react'
import '../css/Home.css'
import BlogSection from '../components/home/blogsection/BlogSection'
import LandingSection from '../components/home/landingsection/LandingSection'
import PastEvents from '../components/home/pastevents/PastEvents'
import UpcomingEvent from '../components/home/upcomingsection/UpcomingEvent'
import SponsorSection from '../components/home/sponsorsection/SponsorSection'
import { InstagramEmbed } from 'react-social-media-embed'
function Home() { 
  return (
    <>
    <LandingSection
        chaptername="SRM IST KTR"
        description="Dive into the exciting domains of Data Science, Machine Learning, Deep Learning, and Natural Language Processing with us. Join our community of passionate learners and innovators as we explore the cutting-edge technologies shaping the future"
        link="/team"
      />
    <UpcomingEvent />
    <SponsorSection />
    {/* <PastEvents /> */}
    {/* <BlogSection /> */}
    <div style={{ display: 'flex', justifyContent: 'center'}}>
  <InstagramEmbed url="https://www.instagram.com/srmsigkdd" width={500} style={{borderRadius:"15px"}}/>
</div>
    </>
  )
}

export default Home