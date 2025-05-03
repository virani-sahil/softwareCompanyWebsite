import React from 'react'

const Footer = () => {
    return (
        <div>
        <div className='grid justify-center lg:justify-between sm:grid-cols-2 lg:grid-cols-4 w-full py-16 px-5 md:px-40 gap-10'>
            <div className='space-y-5'>
                <div className='flex items-center gap-1'>
                    <img src="/images/logo.png" alt="" />
                    <img src="/images/Ikdevelopers.png" alt="" />
                </div>
                <p className='w-full max-w-[300px] text-[#718096]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <img src="/images/google-page-speed.png" alt="" />
            </div>

            <div>
                <ul className='text-[#718096] space-y-5 grid justify-center text-center sm:text-start'>
                    <h1 className='text-lg font-[700] text-black'>Links</h1>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Case Studies</li>
                    <li>How ti works</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Area We Serve</li>
                </ul>
            </div>

            <div className='text-[#718096] space-y-5'>
                <h1 className='text-lg font-[700] text-black'>Contact us</h1>
                <p className='w-full max-w-[300px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p>+923183561921</p>
            </div>

            <div className='flex items-end'>
                <div className='flex items-center'>
                    <img src="/images/facebook.png" alt="" />
                    <img src="/images/instagram.png" alt="" />
                    <img src="/images/twitter.png" alt="" />
                    <img src="/images/linkedin.png" alt="" />
                </div>
            </div>
        </div>

        {/* footer line */}
        <hr className='w-full h-5 text-[#CBD5E0]' />
        <div className='flex justify-center text-[#CBD5E0] text-xs md:text-md pb-5 px-5'>
            <p>© 2023 Copyright by IK Developers. All rights reserved.</p>
        </div>
        </div>
    )
}

export default Footer
