import React from 'react'
import { feedback } from '../constant'
import { quotes } from '../assets'
import "../index.css"
const Testimonial2 = () => {
  return (
    <div className='flex my-10 flex-wrap  gap-5 w-full  my-24'>{feedback.map((feedback)=>{
        return <div key={feedback.id} className=' max-w-[370px]   mb-10 px-5 hover:testimonial  ' >
          <span ><img src={quotes} alt="quote image" srcset="" width={30} className='py-4' /></span>
          <p className='leading-[28px] text-sm '> {feedback.content}</p>
          <div className='flex py-6 jusity-center items-center '>
            <img src={feedback.img} alt="" srcset=""  width={50} height={50}/>
          <div className='px-3'>  <h2>{feedback.name}</h2>
            <p className='text-xs'>{feedback.title}</p></div>

          </div>
        </div>
    })
    }</div>
  )
}

export default Testimonial2