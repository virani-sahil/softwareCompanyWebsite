import React, { useState } from 'react'
import { techBackendLogo, techCategories } from '../util/data';

function Techstack() {
    const [activeTab, setActiveTab] = useState("Backend");
  return (
    <div className="w-full py-16 px-5 md:px-40">
      <div className="text-center space-y-2">
        <div className="flex justify-center pb-4">
          <img src="/images/Deco-line.png" alt="" />
        </div>
        <p className="text-4xl font-[400]">Our</p>
        <h1 className="text-4xl font-[700]">Tech Stack</h1>
      </div>

      <div className="grid lg:flex justify-center gap-3 lg:gap-6 mt-10 mb-14">
        {/* Lists */}
        {techCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`relative text-base font-medium ${
              activeTab === category
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500"
                : "text-gray-800"
            }`}
          >
            {category}
            {activeTab === category && (
              <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 h-[4px] w-6 rounded-full bg-gradient-to-r from-purple-700 to-pink-500"></span>
            )}
          </button>
        ))}
      </div>

      {/* languages */}
      <div className="flex flex-wrap gap-8 md:gap-4 lg:gap-10 justify-center">
        {techBackendLogo.map((tech) => (
          <img
            key={tech.name}
            src={tech.src}
            alt={tech.name}
            className="h-12 object-contain w-full max-w-[200px]"
          />
        ))}
      </div>
    </div>
  )
}

export default Techstack
