import React from 'react';
import useSound from 'use-sound';

const Hero = () => {
  return (
    <>
    {/* component */}
    <div className="h-screen bg-gray-50 flex items-center">
      <section
        className="bg-cover bg-center py-32 w-full h-full"
        style={{ backgroundImage: 'url("https://image.lexica.art/full_jpg/4e3ce879-4074-49b1-be8e-52216a7f08f9")' }}
      >
        <div className="container mx-auto text-left text-white">
          <div className="flex items-center">
            <div className="w-1/2">
              <h1 className="text-5xl font-medium mb-6">Step into Harmony Within</h1>
              <p className="text-xl mb-12">
              where understanding meets support. 
              Embrace a journey of self-discovery and well-being, because your mental health matters
              </p>
              <a
                href="#"
                className="bg-fuchsia-900 text-white py-4 px-12 rounded-full hover:bg-green-600"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
  
  );
};

export default Hero;