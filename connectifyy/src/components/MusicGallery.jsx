// src/components/MusicGallery.js
import React from 'react';

const MusicGallery = () => {
  return (
    <div className="music-gallery">
      <h2>Music</h2>
      <div className="track">
        <h3>Queen - Bohemian Rhapsody</h3>
        <audio controls>
          <source src="path/to/bohemian-rhapsody.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="track">
        <h3>Rapp Grande - Omega</h3>
        <audio controls>
          <source src="path/to/omega.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default MusicGallery;
