import React from 'react'
import {logo} from "../assets"

const Navbar = () => {
  return (
    <div className='w-full  h-[40px]'>
<nav  className='flex justify-between items-center py-6 text-sm '>
    <div><img src={logo} alt="logo" srcset="" width={82} /></div>
    <ul className='flex text-[#fff]  capitalize'>
        <li className='px-3'>home </li>
        <li className='px-3'>About us</li>
        <li className='px-3'>features</li>
        <li className='px-3'>solution</li>
    </ul>
</nav>
    </div>
  )
}

export default Navbar