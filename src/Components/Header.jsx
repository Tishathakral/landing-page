import React from 'react';
import logo from "/logo2.png"

const Header = () => {
  return (
    <>
  {/* component */}
  <div className=" drop-shadow-2xl border-gray-100 pb-5 bg-yellow-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    {/* Logo and Subscribe Section */}
    <div className="flex flex-col-reverse md:flex-row min-w-full py-2 space-y-8 justify-center md:justify-between md:space-x-10 ">
      <div className="flex-1 md:self-start flex-col justify-center">
        <a href="#">
          <div className="flex justify-start items-center flex-row">
            <img src={logo} className="h-20 w-20 " alt="" />
            <span className="pt-1 mx-1 text-4xl italic font-serif text-red-700 hover:text-gray-900">
              Harmony <div className="text-2xl">Within</div>
            </span>
          </div>
        </a>
      </div>
      <div className="flex justify-around items-center">
        <a
          className="text-base text-black-500 flex items-center"
          href="#"
        >
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://cdn-icons-png.flaticon.com/512/3186/3186995.png"
            alt=""
          />
          <div className="text-black justify-around">
            <h3>Subscribe</h3>
            <h3>To our Newsletter</h3>
          </div>
        </a>
        <div className="-my-2 md:hidden">
          <button
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    {/* Division Line */}
    <hr className="my-4 border-t border-gray-300" />
    {/* Navigation Section */}
    <nav id="bar" className="flex justify-start bg-green-700 border-spacing-8"> {/* Change background color here */}
      <div className="flex flex-col md:flex-row justify-center md:space-y-0 my-4 space-y-2  text-center text-white text-lg font-sans">
        <a
          href="#"
          className="mx-10 hover:text-red-900 active"
          aria-current="page"
        >
          {" "}
          How to Meditate{" "}
        </a>
        <a href="#" className="mx-10 hover:text-red-900">
          {" "}
          Learn{" "}
        </a>
        <a href="#" className="mx-10 hover:text-red-900">
          {" "}
         Work
        </a>
        <a href="#" className="mx-10 hover:text-red-900">
          {" "}
         About{" "}
        </a>
      </div>
    </nav>
  </div>
</div>
</>
  );
};

export default Header;