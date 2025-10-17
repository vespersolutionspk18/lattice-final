import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from './components/Form'

const page = () => {
  return (
    <>
      <Header />
      <main className="pt-[11.8rem] md:pt-[11.2rem]">
      <div className="px-5 pb-5">
        <Form />
      </div>
      <Footer />
      </main>
    </>
  )
}

export default page
