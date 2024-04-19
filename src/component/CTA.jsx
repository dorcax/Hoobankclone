import React from 'react'
import Getstarted2 from './Getstarted2'

const CTA = () => {
  return (
    <section className='flex w-full  flex-wrap testimonial my-24 justify-between items-center  p-4 md:p-20  rounded-2xl mb-10'>
        <div className='text-white '>
         <h2 className=' text-4xl font-bold pb-4 '>Let’s try our service now!</h2>
         <p className='max-w-sm text-sm leading-[28px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div>
            <Getstarted2/>
        </div>
    </section>
  )
}

export default CTA