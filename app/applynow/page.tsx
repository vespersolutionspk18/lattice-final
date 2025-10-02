import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ApplicationForm from '../careers/components/ApplicationForm'

const ApplyNowPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <ApplicationForm />
      </div>
      <Footer />
    </div>
  )
}

export default ApplyNowPage
