import React, { useState } from 'react';
import logo from "/logo2.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="drop-shadow-2xl border-gray-100 md:pb-5 pb-1 bg-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Logo Section */}
          <div className="flex flex-col-reverse md:flex-row min-w-full py-2 space-y-8 md:justify-between">
            <div className="flex-1 md:self-start md:flex md:items-center">
              <a href="#" className="flex items-center">
                <img src={logo} className="h-16 w-16 sm:h-20 sm:w-20" alt="" />
                <span className="pt-1 mx-1 text-2xl sm:text-4xl italic font-serif text-red-700 hover:text-gray-900">
                  Harmony <div className="text-lg sm:text-2xl">Within</div>
                </span>
              </a>
            </div>
            {/* Hamburger Menu Icon */}
            <div className="md:hidden cursor-pointer absolute right-10 -top-1" onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </div>
          </div>
          {/* Division Line */}
          <hr className="my-4 border-t border-black" />
          {/* Navigation Section */}
          <nav
            id="bar"
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex flex-col sm:flex-row items-center border-spacing-8 md:bg-[url("https://static.vecteezy.com/system/resources/thumbnails/026/942/074/small/ai-generative-rusty-green-rock-surface-texture-closeup-marble-or-ceramic-tile-effect-toned-dark-green-stone-background-with-copy-space-for-design-wide-banner-panoramic-photo.jpg")] backdrop-blur-2 rounded-lg w-full`}
          >
            <div className='backdrop-blur-sm w-full rounded md:flex justify-start'>
              <div className="flex flex-col sm:flex-row justify-center sm:space-y-0 my-4 space-y-2 text-center text-black md:text-white text-lg font-gotham">
                <a
                  href="#"
                  className="mx-2 sm:mx-4 hover:scale-110 active"
                  aria-current="page"
                >
                  {" "}
                  How to Meditate{" "}
                </a>
                <a href="#" className="mx-2 sm:mx-4 hover:scale-110 active">
                  {" "}
                  Learn{" "}
                </a>
                <a href="#" className="mx-2 sm:mx-4 hover:scale-110 active">
                  {" "}
                  Work
                </a>
                <a href="#" className="mx-2 sm:mx-4 hover:scale-110 active">
                  {" "}
                  About{" "}
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
