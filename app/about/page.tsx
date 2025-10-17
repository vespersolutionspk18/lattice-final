import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import LeadChange from '../homecomponents/LeadChange'
import OurStory from './components/OurStory'

const page = () => {
  return (
    <>
      <Header />
      <main className="pt-[11.8rem] md:pt-[11.2rem]">
      <Hero />
      <WhoWeAre />
      <OurStory />
      <LeadChange text="Join 850+ Successful Contractors" />
      <Footer />
      </main>
    </>
  )
}

export default page
