import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Product from '../components/products/Product'
import About from '../components/about/About'
import Box from '../components/box/Box'
import Footer from '../components/footer/Footer'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Product />
        <About />
        <Box />
        <Footer />
    </div>
  )
}

export default LandingPage