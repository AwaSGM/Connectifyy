// src/components/VideoGallery.js
import React from 'react';
import './videoGallery.css';

const VideoGallery = () => {
  return (
    <div className="video-gallery">
      <h2>Videos</h2>
      <video width="100%" controls>
        <source src="connectifyy\src\Assets\PageProfile\pexels-rodnae-productions-7017804 (1080p).mp4" type="video/mp4" />
        votre navigareur ne supporte pas ce format video
      </video>
    </div>
  );
};

export default VideoGallery;
