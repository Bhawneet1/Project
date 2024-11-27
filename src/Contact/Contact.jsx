import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ContactForm from '../Components/Contact'

const ContactPage = () => {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen '>
        <ContactForm/>
      </div>
      
      <Footer/>
    </>
  )
}

export default ContactPage