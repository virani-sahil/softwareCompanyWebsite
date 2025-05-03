import React from 'react'

function Home() {
  return (
    <div className='pt-20 pb-6 px-5 relative'>
      <div className='grid justify-center gap-10 lg:flex items-center '>
        <div className='w-full max-w-[531px]'>
          <p className='text-4xl md:text-5xl '>Great <span className='font-bold bg-linear-to-b bg-gradient-to-b from-[#D16BA5] to-[#944BBB] bg-clip-text text-transparent'>Product</span> is </p>
          <p className='text-4xl sm:text-5xl md:text-[53px] font-bold pt-3'>built by great <span className='font-bold bg-gradient-to-r from-[#7F53AC] to-[#F2A3C3] bg-clip-text text-transparent'>teams</span></p>
          <p className='text-lg pt-8 pb-10'>We help build and manage a team of world-class developers to bring your vision to life</p>
          <div>
            <button className='bg-[#3D63EA] text-white rounded-md w-full max-w-[140px] md:max-w-[175px] h-[52px] font-[600]'>Let's get started!</button>
          </div>
        </div>
        <div>
          <img src="/images/homemain.png" alt="" />
        </div>
      </div>

      {/* half circle image */}
      <img className="absolute bottom-0 left-2/6 w-full max-w-[40px] md:max-w-[72px]" src="/images/Ellipsecircle.png" alt="" />
    </div>
  )
}

export default Home
