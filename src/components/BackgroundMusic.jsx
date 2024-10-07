// BackgroundMusic.js
import React, { useEffect, useRef } from 'react';
import music from '../assets/piano.mp3'
const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Play the audio when the component is mounted
    audioRef.current.play();

    // Optionally, handle cleanup on component unmount
    return () => {
      audioRef.current.pause();
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BackgroundMusic;
