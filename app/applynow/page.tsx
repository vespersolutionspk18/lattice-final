import React, { Suspense } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ApplicationForm from '../careers/components/ApplicationForm'

const ApplyNowPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <Suspense fallback={<div className="flex justify-center items-center min-h-[400px]">Loading...</div>}>
          <ApplicationForm />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default ApplyNowPage
