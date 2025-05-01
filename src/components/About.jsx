import React from 'react'

const About = () => {
  return (
    <div className='relative px-5 md:px-40 pb-12'>
      <img className="absolute top-0 left-1/9 w-full max-w-[40px] md:max-w-[72px]" src="/images/Ellipse.png" alt="" />
      <div className='grid justify-center xl:flex xl:items-center xl:justify-between gap-16 pt-30 pb-5 xl:py-30'>
        <div className='xl:w-full xl:max-w-[435px] order-2 xl:order-1'>
            <img src="/images/Deco-line.png" alt="" />
            <div className='pt-5 pb-8'>
                <p className='text-3xl md:text-4xl font-[400]'>Leading companies trust us</p>
                <p className='text-3xl md:text-4xl font-[700] pt-3'>to develop software</p>
            </div>
            <p className='text-lg'>We <span className='bg-linear-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent'>add development capacity</span> to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.</p>
            <button className='flex items-center gap-4 text-[#57007B] pt-12'>
            See more Informations <img src="/images/arrow-right-line.png" alt="" />
            </button>
        </div>
        <div className='flex justify-center order-1 xl:order-2'>
            <img className='w-full max-w-[600px]' src="/images/video.png" alt="" />
        </div>
      </div>
        <div className='space-y-5'>
            <img src="/images/Deco-line.png" alt="" />
            <div className='flex justify-between'>
                <div className='space-y-3'>
                <p className='text-xl md:text-4xl font-[400]'>Meet the People</p>
                <p className='text-xl md:text-4xl font-[700]'>We are Working With</p>
                </div>
                <div className='flex items-end gap-5'>
                    <button className='border rounded-full w-[30px] md:w-[45px] h-[30px] md:h-[45px] flex justify-center items-center text-xl'><img className='w-[22px] h-[22px]' src="/images/leftarrow.png" alt="" /></button>
                    <button className='rounded-full w-[30px] md:w-[45px] h-[30px] md:h-[45px] flex justify-center items-center text-xl bg-[#57007B]'><img className='w-[22px] h-[22px]' src="/images/rightarrow.png" alt="" /></button>
                </div>
            </div>
        </div> 
      
      <img className="absolute bottom-0 right-2/6 w-full max-w-[40px] md:max-w-[72px]" src="/images/Ellipsecircle.png" alt="" />
    </div>
  )
}

export default About
