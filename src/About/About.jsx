import React from 'react'
import Navbar from '../Components/Navbar'
import AboutComponent from '../Components/About'
import Footer from '../Components/Footer'

const AboutPage = () => {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
        <AboutComponent/>
      </div>
      <Footer/>
    </>
  )
}

export default AboutPage
