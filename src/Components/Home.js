import React from 'react'
import Contact from './Contact'
import Faq from './Faq'
import Footer from './Footer'
import Hero from './Hero'
import './HomeStyles.css'
import NavBar from './NavBar'
import Pricing from './Pricing'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <Pricing />
    <Testimonials />
    <Faq />
    <Contact />
    <Footer />
    </>
  )
}

export default Home