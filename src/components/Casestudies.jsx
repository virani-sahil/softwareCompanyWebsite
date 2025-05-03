import React from "react";
import { caseStudyData } from "../util/data";

const Casestudies = () => {
  return (
    <div className="w-full bg-[#F7F7FA] py-16 px-5 md:px-40">
      <div className="text-center space-y-2 relative">
        <div className="flex justify-center pb-4">
          <img src="/images/Deco-line.png" alt="" />
        </div>
        <p className="text-4xl font-[400]">Our recent</p>
        <h1 className="text-4xl font-[700]">Case studies</h1>
        <img className="hidden sm:block absolute w-[12px] lg:w-[18px] h-[12px] lg:h-[18px] top-1 md:-top-10 xl:top-0 left-1/4 md:left-1/4 lg:left-2/10" src="/images/blog-ellipse2.png" alt="" />
      </div>

      <div className="mt-20 mb-10 space-y-9">
        {caseStudyData.map((item) => (
          <div
            className="grid lg:flex items-center gap-3 w-full rounded-4xl"
            style={{ backgroundColor: item.bgcolor }}
          >
            <img className="w-full lg:max-w-[400px] xl:max-w-[600px]" src={item.image} alt="" />
            <div className="px-10">
              <h1 className="text-xl xl:text-3xl font-[600]">{item.title}</h1>
              <p className="text-xs xl:text-sm font-[400] pt-2 xl:pt-8 pb-4 xl:pb-16">{item.desc}</p>
              <div className="flex items-end justify-end w-full pb-2">
                <h3 className="text-sm font-[600] bg-linear-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent">
                  Read more
                </h3>
                <img src="/images/graterthan.png" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex items-end justify-end">
        <h1 className="text-md md:text-xl font-[600] bg-linear-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent">Read more case studies</h1>
        <img className="w-[20px] h-[20px] md:w-[27px] md:h-[27px]" src="/images/graterthan.png" alt="" />
      </div>
    </div>
  );
};

export default Casestudies;
