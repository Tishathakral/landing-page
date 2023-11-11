import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import {FaPlay,FaPause} from 'react-icons/fa';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

const Waveform = ({ audioFile }) => {
  const waveformRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

    // Add event listeners for play and pause
    const playPauseButtonRef = document.getElementById('playPauseButton');

    playPauseButtonRef.addEventListener('click', () => {
      if (isPlaying) {
        wavesurfer.pause();
        setIsPlaying(false);
      } else {
        wavesurfer.play();
        setIsPlaying(true);
      }
    });

    return () => {
      // Clean up on component unmount
      wavesurfer.destroy();
    };
  }, [audioFile]);

  const getIcon = () => {
    if (isPlaying) {
      return <FaPause/>;
    } else {
      return <FaPlay/>;
    }
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto my-8">
      <div className="bg-gray-800 p-4 rounded-md shadow-md">
        <div ref={waveformRef} className="w-full h-40"></div>
        <div className="flex justify-center mt-2">
          <button id="playPauseButton" className="mr-2">
            {getIcon()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Waveform;