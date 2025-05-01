import React from "react";
import { caseStudyData } from "../util/data";

const Casestudies = () => {
  return (
    <div className="w-full bg-[#F1F2FF] py-16 px-6">
      <div className="text-center space-y-2">
        <div className="flex justify-center pb-4">
          <img src="/images/Deco-line.png" alt="" />
        </div>
        <p className="text-4xl font-[400]">Our recent</p>
        <h1 className="text-4xl font-[700]">Case studies</h1>
      </div>
      <div>
        {
            caseStudyData.map((item) => (
                <div className="flex gap-10 w-full px-10" style={{ backgroundColor: item.bgcolor }}>
                    <img src={item.image} alt="" />
                    <div>wejehj</div>
                </div>
            ))
        } 
      </div>
    </div>
  );
};

export default Casestudies;
