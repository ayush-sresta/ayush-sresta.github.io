import React from 'react'
import { easeIn, motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Skills from '../pages/Skills'
import Contact from "../pages/Contact"

const AppLayout = () => {
  return (
    <>
      <Header />
      <section id='home'>
        <Home />
      </section>
      <section className="lg:py-30 py-20" id='about'>
        <About />

      </section>
      <section className="lg:py-30 py-20" id='services'>
        <Services />

      </section>
      <section className="lg:py-30 py-20" id='skills'>

        <Skills />
      </section>
      <section className="lg:py-30 py-20" id='contact'>

        <Contact />
      </section>
      <section>
      <Footer />
      </section>
        
    </>
  )
}

export default AppLayout