import React from 'react'
import { footerLinks,socialMedia } from '../constant/index'
import { logo } from '../assets'
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <section className='text-white   mt-24'>
      <div className='flex gap-40'>
      <div className=''>
            <img src={logo} alt="" width={184} height={51.8} className=' pb-3'/>
            <p className='max-w-[240px] font-normal text-sm leading-[32px]'>A new way to make the payments easy, reliable and secure.</p>
            
          
        </div>
        <div className='flex gap-8  justify-between w-full '>{footerLinks.map((footer)=>{
            return <div>
                <h2 className='text-xl  leading-[24px] w-[108px] h-[27px]'>{footer.title}</h2>

                <ul className=''>{footer.links.map((link)=>(
                <li className='text-sm leading-[27px]'><a href={link.link}>{link.name}</a></li>
        ))}</ul> 
            </div>
        })}</div>
     

      </div>
      <div className=' pt-10 pb-4'><hr /></div>
      <div className='flex justify-between'>
        <div>
         <p className=' text-xs'>

            Copyright <span className='px-2'><i class="far fa-copyright"></i></span>{new Date().getFullYear()} HooBank. All Rights Reserved.
         </p>
        </div>
        <div className='flex  gap-6'>
            {socialMedia.map((socialmedia)=>(
                <ul>
                    <li><img src={socialmedia.icon} alt="social-media images" srcset=""  width={15}/></li>
                </ul>


            ))}
        </div>
      </div>

    </section>
  )
}

export default Footer