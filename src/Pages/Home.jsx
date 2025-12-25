import React from 'react'
import Header from '../omponents/Home/Header'
import AboutUs from '../omponents/Home/AboutUs'
import WhyChooseUs from '../omponents/Home/WhyChooseUs'
import MeetMyTeam from '../omponents/Home/MeetMyTeam'
import Faq from '../omponents/Home/Faq'
function Home() {
  return (
    <div>
      <Header />
      <AboutUs/>
      <WhyChooseUs/>
      <MeetMyTeam/>
      <Faq/>
    </div>
  )
}
export default Home
