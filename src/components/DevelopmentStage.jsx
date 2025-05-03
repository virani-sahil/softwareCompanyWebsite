import React from "react";
import { steps } from "../util/data";

const DevelopmentStage = () => {
  return (
    <div className="py-16 px-5 md:px-40">
      <div className="text-center space-y-2">
        <div className="flex justify-center pb-4">
          <img src="/images/Deco-line.png" alt="" />
        </div>
        <p className="text-3xl md:text-4xl font-[400]">How development</p>
        <h1 className="text-3xl md:text-4xl font-[700]">through Alcaline works</h1>
      </div>

      <div className="grid lg:grid-cols-6 gap-10 lg:gap-4 relative z-10 my-16">
        <div className="hidden lg:block absolute top-1/2 -left-16 w-full h-[2px] bg-red-500 z-0">
          <img className="absolute left-1/6 -top-7" src="/images/Lines.png" alt="" />
          <img className="absolute left-3/6 -top-7" src="/images/Lines.png" alt="" />
          <img className="absolute left-5/6 -top-7" src="/images/Lines.png" alt="" />
          <img className="absolute left-2/10" src="/images/Lines.png" alt="" />
          <img className="absolute left-6/10" src="/images/Lines.png" alt="" />
          <img className="absolute left-9/10" src="/images/Lines.png" alt="" />
        </div>

        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <img src="/images/Trophy.png" alt="" />
        </div>

        {/* development step block */}
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col items-center w-full ${
              index % 2 === 0 ? "mb-0 lg:mb-20" : "mt-0 lg:mt-50"
            }`}
          >
            <div className="bg-white shadow-md p-4 rounded-lg w-[280px] lg:w-[200px] xl:w-[299px] h-[159]">
              <div className="flex gap-2 items-center w-full">
                <h3 className="font-bold text-md xl:text-lg bg-linear-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent">
                  #{step.id}
                </h3>
                <h3 className="text-lg lg:text-md xl:text-lg font-[700]">{step.title}</h3>
              </div>
              <p className="text-lg lg:text-xs xl:text-sm text-gray-600 mt-2">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentStage;
