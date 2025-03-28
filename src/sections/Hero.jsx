import { Button } from '@mui/material'
import React from 'react'
import iconURL from '../assets/icons/arrow-right.svg'
import { statistics } from '../constants'
import {bigShoe1} from '../assets/images'

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10"
      >
        <div className='relative flex flex-col justify-center items-start w-full pt-28'>
        <p className='text-xl font-bold text-red-400'> Our Summer Collection</p>
        <h1 className='font-sans mt-10 text-8xl max-sm:text-[62px] max-sm:leading-[1] font-bold text-gray-800'>
          <span className='xl:bg-white xl:whitespace-nowrap '> The New Arrival</span>
          <br/>
          <span className=' text-orange-600 inline-block mt-3 mr-4'> Nike</span>
          Shoes
        </h1>
        <p className='font-sans text-gray-600 leading-8 text-lg mt-6 mb-14  max-w-sm sm:max-w-full z-10'>
        Discover stylish Nike arrivals, quality confort, and innovation for your active life.
        </p>
        <button className='flex justify-center items-center gap-1 rounded-full bg-orange-600 px-7 py-2 border text-white border-coral-red' >Shop Now <img className='ml-2 rounded-full w-5 h-5' src={iconURL}/></button>
        <div className='flex justify-center items-start flex-wrap mt-20 gap-10'>
{statistics.map((stat) =>(
  <div key={stat.label}>
    <p className='text-2xl font-palanquin font-bold'>{stat.value}</p>
    <p className='leading-7 font-sans text-gray-700'>{stat.label}</p>
  </div>
))}
        </div>
        </div>
        <div className='relative flex justify-between items-center items-center 
        xl:min-h-screen max-xl basis-250 mr-8'>
          <img src={bigShoe1}
          alt="show collection"
          width={610}
          height={500}
          className='object-contain relative '/>
        </div>
       
        
    </section>
  )
}

export default Hero