import React, { Suspense } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ApplicationForm from '../careers/components/ApplicationForm'

const ApplyNowPage = () => {
  return (
    <>
      <Header />
      <main className="pt-[11.8rem] md:pt-[11.2rem]">
      <Suspense fallback={<div className="flex justify-center items-center min-h-[400px]">Loading...</div>}>
        <ApplicationForm />
      </Suspense>
      <Footer />
      </main>
    </>
  )
}

export default ApplyNowPage
