import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import LeadChange from '../homecomponents/LeadChange'
import OurStory from './components/OurStory'

const page = () => {
  return (
    <div>
      <div className="p-5">
        <Header />
      </div>
      <Hero />
      <WhoWeAre />
      <OurStory />
      <LeadChange text="Join 850+ Successful Contractors" />
      <Footer />
    </div>
  )
}

export default page
