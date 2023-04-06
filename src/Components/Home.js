import React from 'react'
import Faq from './Faq'
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
    </>
  )
}

export default Home