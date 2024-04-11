import React from 'react'
import Testimonial2 from './Testimonial2'

const Testimonial = () => {
  return (
    <section className='w-full text-white '>
       <div className='grid grid-cols-2 '>
       <div><h2 className='max-w-[300px] text-4xl leading-[60px] font-semibold'>What people are saying about us</h2></div>
        <div className='grid justify-center items-center max-w-sm leading-[28.8px] text-md'><p >Everything you need to accept card payments and grow your business anywhere on the planet.</p></div>
       </div>
       <div>
        <Testimonial2/>
       </div>
    </section>
  )
}

export default Testimonial