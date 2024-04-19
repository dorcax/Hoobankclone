import React from 'react'
import Features from './Features'
import Getstarted2 from './Getstarted2'

const Business = () => {
  return (
   <section className='w-full flex  flex-wrap text-white my-20  gap-10  '>
    <div className=''>
         <h2 className='max-w-2xl  text-5xl leading-[76.8px] font-bold'>You do the business, <br />we’ll handle the money.</h2>
         <p className='max-w-md  font-normal leading-[30.6px] text-md mt-5'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
         <Getstarted2/>
    </div>
    <div className='flex  justify-center flex-1'>  
        {/* features */} 
        <Features/>
    </div>
   </section>
  )
}

export default Business