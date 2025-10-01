import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from './components/Form'

const page = () => {
  return (
    <div>
      <Header />
      <div className="pt-32 px-5 pb-5">
        <Form />
      </div>
      <Footer />
    </div>
  )
}

export default page
