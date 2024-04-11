import React from 'react'
import { arrowUp } from '../assets'
const GetStarted = () => {
  return (
    <div className='w-[140px] h-[140px] bg-blue-gradient rounded-full p-1 cursor-pointer'>
        <div className='flex items-center justify-center bg-[#000] w-[100%] h-[100%] rounded-full '>
            <div>
                <p className='text-md capitalize text-gradient '><span className='flex mr-2'>get <img src={arrowUp} alt="arrow up" srcset=""   className='ml-1 w-[23px] h-[23px]' />  </span> started</p>
            </div>
        </div>
    </div>
  )
}

export default GetStarted