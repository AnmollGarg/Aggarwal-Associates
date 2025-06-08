import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Timeline from './components/Timeline'
import OurCustomers from './components/OurCustomers'
import Form from './components/Form'
import Footer from './components/Footer'
import SmoothScrollNavigation from './components/SmoothScrollNavigation'

const App = () => {
  return (
    <div>
      <SmoothScrollNavigation />
      
      <Navbar/>
      
      <section id="hero" className="animate-on-scroll">
        <Hero />
      </section>

      <section id="services" className="animate-on-scroll">
        <Features />
      </section>

      <section id="process" className="animate-on-scroll">
        <Timeline />
      </section>

      <section id="testimonials" className="animate-on-scroll">
        <OurCustomers />
      </section>

      <section id="form" className="animate-on-scroll">
        <Form />
      </section>

      <Footer/>
    </div>
  )
}

export default App
