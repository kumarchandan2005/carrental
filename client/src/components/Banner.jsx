import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-start items-center justify-between  px-8 min-md:pl-14  pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden '>
        <div> 
            <h2 className='text-3xl font-medium'>Do You Own a Luxury car?</h2>
            <p className='mt-2'>Monetize your vechicle effortlessly by listing it on CarRental.</p>
            <p>We take care of insurance, driver verification and secure payments- so you can earn passive income, stress-free.</p>
            <button>List your car</button>
        </div>
        <img src={assets.banner_car_image} alt="" />
    </div>
  )
}

export default Banner