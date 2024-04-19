import React from 'react'
import { card } from '../assets'
import Getstarted2 from './Getstarted2'
const Card = () => {
  return (
   <section className='w-full grid md:grid-cols-2 my-24 gap-20'>
    <div className='text-white w-full '>
  <h2 className='max-w-sm  font-semibold text-4xl leading-[40px]' >Find a better card deal in few easy steps.</h2>
    <p className='max-w-[300px] text-sm leading-[28px] my-4'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
    <Getstarted2/>
  
    </div>
    <div className=''>
        <img src={card} alt="" srcset="" width={449}  className=''/>
    </div>
   </section>
  )
}

export default Card