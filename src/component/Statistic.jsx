import React from 'react'

import {stat} from"../constant/index"
const Statistic = () => {
  return (
    <div className='w-full flex flex-wrap  gap-10  text-white'>
        {stat.map((stats,index)=>{
            return <div key={index} className='flex w-full items-center   max-w-[350px] '>
                <h3 className='text-4xl font-semibold px-2'>{stats.value}</h3>
                <p className='text-xl capitalize text-gradient py-4 flex items-center'>{stats.title}</p>
        
            </div>
        })}
    </div>
  )
}

export default Statistic