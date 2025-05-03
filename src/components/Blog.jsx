import React from "react";

const Blog = () => {
  return (
    <div className="py-16 px-5 md:px-40">
      <div className="text-center space-y-2">
        <div className="flex justify-center pb-4">
          <img src="/images/Deco-line.png" alt="" />
        </div>
        <p className="text-4xl font-[400]">Our recent</p>
        <h1 className="text-4xl font-[700]">Case studies</h1>
      </div>

      {/* case 1 */}
      <div className="pt-20 space-y-24">
        <div className="grid justify-center lg:flex items-center lg:justify-between gap-16 lg:gap-10">
          <div className="w-full max-w-[500px] space-y-2 xl:space-y-7">
            <h1 className="text-2xl xl:text-3xl font-[600]">Build the right team to scale</h1>
            <p className="text-md xl:text-lg font-[400] text-[#2D3748]">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term not the case with freelancers
            </p>
            <p className="text-md xl:text-lg">
              Our <span className='bg-linear-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent'>delivery model</span> helps you cut costs and deliver
              within budget.
            </p>
            <div className="flex items-center gap-5">
              <img src="/images/stand-line.png" alt="" />
              <p className='w-full max-w-[400px] bg-linear-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent'>
                "Simform is quick to identify larger problem with the Software
                so we decided to expand our scope to build new modules"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <img src="/images/blog-pro-img1.png" alt="" />
              </div>
              <div>
                <h1>Jeewa markram</h1>
                <p>CEO</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src="/images/blog-img1.png" alt="" />
            <img className="absolute -z-30 top-[-10px] sm:top-[-16px] md:top-[-25px] left-[-10px] sm:left-[-16px] md:left-[-25px] w-full max-w-[30px] sm:max-w-[50px] md:max-w-[65px]" src="/images/blog-ellipse1.png" alt="" />
            <img className="absolute -z-30 bottom-[-15px] left-1/2" src="/images/blog-ellipse2.png" alt="" />
          </div>
        </div>

        {/* case 2 */}
        <div className="grid justify-center lg:flex items-center lg:justify-between gap-16 lg:gap-10">
          <div className="relative order-2 lg:order-1">
            <img src="/images/blog-img2.png" alt="" />
            <img className="absolute -z-30 top-[-10px] right-[-10px]" src="/images/blog-ellipse2.png" alt="" />
            <img className="absolute -z-30 bottom-[-18px] md:bottom-[-25px] left-1/4 w-full max-w-[35px] md:max-w-[55px]" src="/images/blog-ellipse1.png" alt="" />
          </div>

          <div className="order-1 lg:order-2 w-full max-w-[500px] space-y-2 xl:space-y-7">
            <h1 className="text-2xl xl:text-3xl font-[600]">Build the right team to scale</h1>
            <p className="text-md xl:text-lg font-[400] text-[#2D3748]">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term not the case with freelancers
            </p>
            <p className="text-md xl:text-lg">
              Our <span className='bg-linear-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent'>delivery model</span> helps you cut costs and deliver
              within budget.
            </p>
            <div className="flex items-center gap-5">
              <img src="/images/stand-line.png" alt="" />
              <p className='w-full max-w-[400px] bg-linear-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent'>
                "Simform is quick to identify larger problem with the Software
                so we decided to expand our scope to build new modules"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <img src="/images/blog-pro-img2.png" alt="" />
              </div>
              <div>
                <h1>Jeewa markram</h1>
                <p>CEO</p>
              </div>
            </div>
          </div>       
        </div>

        {/* case 3 */}
        <div className="grid justify-center lg:flex items-center lg:justify-between gap-16 lg:gap-10">
          <div className="w-full max-w-[500px] space-y-2 xl:space-y-7">
            <h1 className="text-2xl xl:text-3xl font-[600]">Build the right team to scale</h1>
            <p className="text-md xl:text-lg font-[400] text-[#2D3748]">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term not the case with freelancers
            </p>
            <p className="text-md xl:text-lg">
              Our <span className='bg-linear-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent'>delivery model</span> helps you cut costs and deliver
              within budget.
            </p>
            <div className="flex items-center gap-5">
              <img src="/images/stand-line.png" alt="" />
              <p className='w-full max-w-[400px] bg-linear-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent'>
                "Simform is quick to identify larger problem with the Software
                so we decided to expand our scope to build new modules"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <img src="/images/blog-pro-img3.png" alt="" />
              </div>
              <div>
                <h1>Jeewa markram</h1>
                <p>CEO</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img src="/images/blog-img3.png" alt="" />
            <img className="absolute -z-30 top-[-15px] left-1/2" src="/images/blog-ellipse2.png" alt="" />
            <img className="absolute -z-30 bottom-[-10px] md:bottom-[-15px] left-[-10px] md:left-[-15px] w-full max-w-[30px] md:max-w-[43px]" src="/images/blog-ellipse1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
