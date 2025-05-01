import React from "react";
import { services } from "../util/data";

const Xyz = () => {
  return (
    <div className="w-full bg-[#FBF9FF] py-12 px-6">
      <h2 className="text-center text-3xl font-bold text-[#1E1E1E] mb-10">
        Services we offer
      </h2>

      <div className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide">
        {services.map((item, index) => (
          <div
            key={index}
            // className={`w-full xl:min-w-[333px] max-w-[333px] min-h-[287px] bg-white rounded-xl p-6 shadow-md transition-all duration-300 relative hover:${
            //   item.active
            //     ? "border border-[#C82282] text-[#C82282] absolute top-10"
            //     : "border border-transparent"
            // }`}
            className={`w-full xl:min-w-[333px] max-w-[333px] min-h-[287px] bg-white rounded-xl p-6 shadow-lg transition-all duration-300 relative border ${
              item.active
                ? "border-[#C82282] text-[#C82282] absolute top-[30px]"
                : "border-transparent"
            }`}
          >
            <div className="w-12 h-12 rounded-full border border-[#C82282] flex items-center justify-center text-2xl mb-4">
              <img className="w-full max-w-[58px]" src={item.icon} alt="" />
            </div>
            <h3
              className={`text-xl font-semibold text-[#1E1E1E] mb-2 text ${
                item.active
                  ? "text-xl font-[600] bg-linear-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center mt-6 gap-2">
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <span
            key={idx}
            className={`h-3 w-3 rounded-full ${
              idx === 2 ? "bg-[#C82282]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Page numbers */}
      <div className="flex justify-end items-center gap-1 mt-4 px-4 text-sm text-gray-400">
        <span className="text-[#AOAECO] font-semibold">01</span>
        <div className="bg-gray-300 h-1" style={{ width: "5%" }}>
          <div className="bg-[#57007B] h-1" style={{ width: "20%" }}></div>
        </div>
        <span className="text-[#57007B] font-semibold">05</span>
      </div>
    </div>
  );
};

export default Xyz;
