import React, { useState } from "react";
import { testimonials } from "../util/data";

const Workwithus = () => {

  const [current, setCurrent] = useState(2);

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <div className="text-center w-full py-16 px-5 md:px-20 relative">
      <div className="text-center space-y-2">
        <div className="flex justify-center pb-4">
          <img src="/images/Deco-line.png" alt="" />
        </div>
        <p className="text-3xl md:text-4xl font-[400]">Why cutomers love</p>
        <h1 className="text-3xl md:text-4xl font-[700]">working with us</h1>
      </div>

      {/* Quotes */}
      <div className="max-w-4xl mx-auto mt-10">
        <div className="flex justify-start mb-3">
          <img src="/images/leftquote.png" alt="" />
        </div>
        <p className="text-[#718096] text-lg font-[400] max-w-[535px] mx-auto mb-4">
          {testimonials[current].quote}
        </p>
        <div className="flex justify-end">
          <img src="/images/rightquote.png" alt="" />
        </div>
      </div>

      <div className="flex items-center justify-center w-full gap-10">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-10 lg:left-40 bottom-20 md:top-1/2"
        >
          <img
            className="border border-purple-700 p-2 rounded-full max-w-[45px]"
            src="/images/leftarrow.png"
            alt=""
          />
        </button>

        {/* Avatars */}
        <div className="grid justify-center md:flex gap-10 overflow-hidden mt-8 py-20">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col items-center transition-transform duration-300"
            >
              <img
                src={t.image}
                className={`w-20 h-20 rounded-full object-cover ${i === current ? "scale-120 mb-2 shadow-2xl" : "opacity-50"
                  }`}
                alt={t.name}
              />
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">
                    ★
                  </span>
                ))}
              </div>
              <h4
                className={`mt-1 font-semibold ${i === current ? "text-purple-700" : "text-gray-500"
                  }`}
              >
                {t.name}
              </h4>
              <p
                className={`text-sm text-gray-400 ${i === current ? "text-black" : "text-gray-500"
                  }`}
              >
                {t.title}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-10 lg:right-40 bottom-20 md:top-1/2"
        >
          <img
            className="border border-purple-700 p-2 rounded-full max-w-[45px]"
            src="/images/arrow-right-line.png"
            alt=""
          />
        </button>
      </div>

      <div className="absolute left-5 md:left-20 lg:left-40 -bottom-10 sm:-bottom-20 md:-bottom-10 xl:-bottom-20">
        <img
          className="w-[80px] sm:w-[170px] md:w-[100px] lg:w-[140px] xl:w-[190px]"
          src="/images/Deco-img-arrow1.png"
          alt=""
        />
      </div>
      <div className="absolute right-5 md:right-20 lg:right-60 -bottom-20 sm:-bottom-20px lg:-bottom-30 xl:-bottom-40">
        <img
          className="w-[80px] sm:w-[150px] md:w-[90px] lg:w-[130px] xl:w-[190px]"
          src="/images/Deco-img-arrow2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Workwithus;
