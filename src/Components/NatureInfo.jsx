// src/components/NatureInfo.js
import React from 'react';

const NatureInfo = () => {
  return (
    <div className="w-2/3 p-4 bg-gray-100 rounded-lg shadow-md left-10 ml-5 h-full">
      <h2 className="text-3xl font-semibold mb-4">Sounds of Nature</h2>
      <p className="mb-4">
        The calming sounds of nature play a crucial role in meditation, promoting relaxation and
        mindfulness. Explore different nature sounds to enhance your meditation experience.
      </p>
      {/* You can add more information or customize as needed */}
      <div className="flex flex-col space-y-2">
        <img
          src="https://image.lexica.art/full_jpg/ab6e1f15-b95d-4f7f-9756-dba05ac5d98e" // Replace with your actual nature image URL
          alt="Nature"
          className="w-full h-full object-cover rounded-md mb-2"
        />
        {/* Add more images or content as needed */}
      </div>
    </div>
  );
};

export default NatureInfo;
