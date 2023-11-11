import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

const Waveform = ({ audioFile }) => {
  const waveformRef = useRef(null);

  useEffect(() => {
    // Initialize WaveSurfer on component mount
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'rgba(100, 100, 100, 0.6)',
      progressColor: 'rgba(255, 0, 0, 0.8)',
      cursorColor: '#fff',
      height: 150,
    });

    // Load the audio file
    wavesurfer.load(audioFile);

    return () => {
      // Clean up on component unmount
      wavesurfer.destroy();
    };
  }, [audioFile]);

  return (
    <div className="w-full max-w-screen-lg mx-auto my-8">
      <div className="bg-gray-800 p-4 rounded-md shadow-md">
        <div ref={waveformRef} className="w-full h-40"></div>
      </div>
    </div>
  );
};

export default Waveform;
