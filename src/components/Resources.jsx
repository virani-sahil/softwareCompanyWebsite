import React from 'react'
import { ResourcesData } from '../util/data'

const Resources = () => {
  return (
    <div className="py-16 px-5 md:px-0">
      <div className="text-center space-y-2">
        <div className="flex justify-center pb-4">
          <img src="/images/Deco-line.png" alt="" />
        </div>
        <p className="text-4xl font-[400]">Featured</p>
        <h1 className="text-4xl font-[700]">Resources</h1>
      </div>

      <div className='grid justify-center lg:flex lg:justify-between lg:gap-5 mt-3 w-full'>
        {
            ResourcesData.map((item) => (
                <div className='w-full max-w-[254px] py-5 lg:py-20'>
                    <img className='w-full max-w-[254px] h-[175px]' src={item.image} alt="" />
                    <p className='font-[500] py-5'>{item.desc}</p>
                    <div className='flex justify-end items-end gap-3'>
                        <h1 className='text-[#57007B] font-[500]'>Read More</h1>
                        <img src="/images/arrow-right-line.png" alt="" />
                    </div>
                </div>
            ))
        }
      </div>

      <div className='flex justify-center w-full mt-5'>
        <img src="/images/footer-img.png" alt="" />
      </div>
    </div>
  )
}

export default Resources
