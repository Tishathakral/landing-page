// src/components/MeditationPlayer.js
import React, { useState, useRef } from 'react';
import NatureInfo from './NatureInfo';

const MeditationPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(0);
  const audioRef = useRef(null);

  const audioList = [
    {
      title: 'Introduction To Meditation',
      src: '/audio1.mp3',
      image: 'https://image.lexica.art/full_jpg/710c402d-d64c-45b8-95b3-8397a6e41b29', // Replace with the actual image URL
    },
    {
      title: 'Nature Sounds 2',
      src: '/audio2.mp3',
      image: 'https://image.lexica.art/full_jpg/8091c49d-cc20-4351-9f76-db9e14aae1ed', // Replace with the actual image URL
    },
    {
      title: 'Nature Sounds 3',
      src: '/audio3.mp3',
      image: 'https://image.lexica.art/full_jpg/c83df087-53b6-46fa-b7a1-3929b1381101', // Replace with the actual image URL
    },
    {
      title: 'Nature Sounds 4',
      src: '/audio4.mp3',
      image: 'https://image.lexica.art/full_jpg/cdc82291-72db-4ad7-af85-6a366a765d5c', // Replace with the actual image URL
    },
    {
      title: 'Nature Sounds 5',
      src: '/audio5.mp3',
      image: 'https://image.lexica.art/full_jpg/34b34f96-e7e7-4dd0-89cc-740eba6f1d75', // Replace with the actual image URL
    },
  ];

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const changeAudio = (index) => {
    setCurrentAudio(index);
    audioRef.current.src = audioList[index].src;
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex w-full">
    {/* Left side with nature information */}
    <NatureInfo />  
    <div className="w-1/2 mx-8 p-8 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
  <h2 className="text-3xl font-semibold mb-4">Meditation Sounds</h2>
  <div className="mb-4">
    {/* Add an image or icon for the meditation player */}
    {/* Replace the following line with your own image/icon */}
    <img
      src={audioList[currentAudio].image}
      alt="Meditation Icon"
      className="w-40 h-40 mb-4 rounded-full"
    />
    <div className="flex items-center space-x-2">
      <button
        onClick={togglePlay}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <p className="text-sm font-semibold">{audioList[currentAudio].title}</p>
    </div>
  </div>
  {/* Audio list */}
  <div className="flex flex-col space-y-2">
    {audioList.map((audio, index) => (
      <button
        key={index}
        onClick={() => changeAudio(index)}
        className={`${
          index === currentAudio ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
        } px-2 py-1 rounded-md`}
      >
        {audio.title}
      </button>
    ))}
  </div>
  {/* Add audio player */}
  <audio ref={audioRef} src={audioList[currentAudio].src} />
</div>
</div>
  );
};


export default MeditationPlayer;
