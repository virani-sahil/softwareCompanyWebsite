import React from 'react'
import { developmentData } from '../util/data'

const DesignAndDevelopment = () => {
  return (
    <div className="w-full bg-[#F7F7FA] pt-16 px-5 md:px-40">
      <div className="text-center space-y-2">
        <div className="flex justify-center pb-4">
          <img src="/images/Deco-line.png" alt="" />
        </div>
        <p className="text-4xl font-[400]">Our design and</p>
        <h1 className="text-4xl font-[700]">development approach</h1>
      </div>

      <div className='flex flex-wrap justify-center 2xl:justify-between gap-5 space-y-10 py-20'>
        {
            developmentData.map((item) => (
                <div className='bg-white flex gap-5 p-5 w-full max-w-[580px] h-full'>
                    <div className='w-full max-w-[40px] md:max-w-[59px]'>
                        <img className="w-full max-w-[59px] p-3 rounded-lg" src={item.image} alt="" 
                        style={{ backgroundImage: `linear-gradient(to top right, ${item.bgcolorOne}, ${item.bgcolorTwo})`,}}/>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-md md:text-xl font-[600]'>{item.title}</h1>
                        <p className='text-sm font-[400]'>{item.desc}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default DesignAndDevelopment
