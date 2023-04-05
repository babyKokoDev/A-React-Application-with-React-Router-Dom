import React from 'react'
import Hero from './Hero'
import './HomeStyles.css'
import NavBar from './NavBar'
import Pricing from './Pricing'

const Home = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <Pricing />
    </>
  )
}

export default Home