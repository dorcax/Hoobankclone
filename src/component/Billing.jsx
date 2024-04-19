import React from 'react'
import { bill,google,apple } from '../assets'
const Billing = () => {
  return (
    <section className='w-full flex flex-wrap  gap-y-20  gap-x-40 '>
      <div className=''>
<img src={bill} alt="billing image" srcset="" className='w-[500px] relative z-[5]' />

 <div className='absolute z-[0] w-[50%] h-[50%] pink-gradient -left-1/2'/> 
<div className="absolute z-[3] w-[50%] h-[50%]  white__gradient rounded-full bottom-0 -left-1/2 top-0"/> 
<div className="absolute z-[2] w-[50%] h-[50%]  blue__gradient rounded-full -left-1/2"/>
    
      </div>
      <div className='text-white flex flex-col   '>
        <h2 className='max-w-[300px] text-3xl font-semibold leading-[40px]'>Easily control your billing & invoicing.</h2>
        <p className='max-w-sm leading-[28.8px] mt-4 text-md'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

        <ul className='flex mt-5 '>
          <li><img src={apple} alt="apple image" srcset="" className='w-[100px]' /></li>
          <li><img src={google} alt="google image" srcset=""  className='w-[100px] mx-10'/></li>
        </ul>
      </div>
    </section>
  )
}

export default Billing