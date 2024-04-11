import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Statistic from './component/Statistic'
import Business from './component/Business'
import Billing from './component/Billing'
import Card from './component/Card'
import Testimonial from './component/Testimonial'
import Client from './component/Client'
import CTA from './component/CTA'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='w-full  bg-[#000] px-24  font-["Poppins", sans-serif]'>
      <Navbar/>

        <Hero/>
      <Statistic />
      <Business />
   
      <Billing/>
      <Card/>
      <Testimonial />
      <Client/>
      <CTA/>
      <Footer />

    </div>
  )
}

export default App