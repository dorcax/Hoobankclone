import React from 'react'
import { clients } from '../constant'
const Client = () => {
  return (
   <section className='text-white'>
    <div className='flex w-full gap-6'>
        {clients.map((client)=>{
            return <div key={client.id} className='flex w-full'>
                <img src={client.logo} alt=" client images" srcset=""  width={120} height={37}/>
            </div>
        })}
        
    </div>
   </section>
  )
}

export default Client