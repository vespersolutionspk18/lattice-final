import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from './components/Hero'
import OpenPositions from './components/OpenPositions'

const CareersPage = () => {
  return (
    <>
      <Header />
      <main className="pt-[11.8rem] md:pt-[11.2rem]">
      <div className="p-5 px-5 pb-5">
        <div className="rounded-2xl overflow-hidden ">
          <Hero />
        </div>
      </div>
      <OpenPositions />
      <Footer />
      </main>
    </>
  )
}

export default CareersPage