import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from './components/Hero'
import OpenPositions from './components/OpenPositions'
import ApplicationForm from './components/ApplicationForm'

const CareersPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="p-5 pt-32 px-5 pb-5">
        <div className="rounded-2xl overflow-hidden ">
          <Hero />
        </div>
      </div>
      <OpenPositions />
      <ApplicationForm />
      <Footer />
    </div>
  )
}

export default CareersPage