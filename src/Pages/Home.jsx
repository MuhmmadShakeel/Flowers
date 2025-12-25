import React from 'react'
import Header from "../components/Home/Header"
import AboutUs from "../components/Home/AboutUs"
import WhyChooseUs from "../components/Home/WhyChooseUs"
import MeetMyTeam from "../components/Home/MeetMyTeam"
import Faq from "../components/Home/Faq"

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
