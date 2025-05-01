import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between min-h-[80px] items-center gap-3">
          <div className="flex items-center gap-1">
            <img src="/images/logo.png" alt="company logo" />
            <img src="/images/Ikdevelopers.png" alt="company name" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-5 lg:space-x-10 font-medium text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">About us</li>
            <li className="hover:text-blue-600 cursor-pointer">Services</li>
            <li className="hover:text-blue-600 cursor-pointer">Case Studies</li>
            <li className="hover:text-blue-600 cursor-pointer">Blog</li>
            <li className="hover:text-blue-600 cursor-pointer">How it Works</li>
            <li className="hover:text-blue-600 cursor-pointer">Hire</li>
          </ul>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div>
            <button className="w-full max-w-[124px] h-[42px] bg-gradient-to-r from-[#57007B] to-[#6675F7] text-white text-[14px] px-2 md:px-3 lg:px-7 rounded-md">
              Contact us
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-white shadow-lg absolute z-10 px-2 w-full md:hidden pt-2 space-y-2">
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              About us
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Case Studies
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Blog
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              How it Works
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Hire
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
//   return (
//     <div className="flex justify-between items-center px-10 py-4 w-screen shadow-lg min-h-[80px]">
//       <div className="flex items-center gap-1">
//         <img src="/images/logo.png" alt="company logo" />
//         <img src="/images/Ikdevelopers.png" alt="company name" />
//       </div>
//       <div>
//         <ul className="flex gap-12">
//           <li>About us</li>
//           <li>Services</li>
//           <li>Case Studies</li>
//           <li>Blog</li>
//           <li>How it Works</li>
//           <li>Hire</li>
//         </ul>
//       </div>
//       <div>
//         <button className="w-full max-w-[124px] h-[42px] bg-gradient-to-r from-[#57007B] to-[#6675F7] text-white text-[14px] px-7 rounded-md">
//           Contact us
//         </button>
//       </div>
//     </div>
//   );
// }

export default Header;
