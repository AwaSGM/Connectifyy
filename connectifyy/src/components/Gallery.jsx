import React, { useState } from 'react';


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { src: '/', text: "La musique est un langage universel qui réunit les âmes et fait vibrer les cœurs", likes: 10 },
// ajouter images if necessary - revoir les liens des images //
  ];

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const handleLike = () => {
    if (selectedImage) {
      setSelectedImage({
        ...selectedImage,
        likes: selectedImage.likes + 1,
      });
    }
  };

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Gallery ${index}`}
            onClick={() => openImage(image)}
            className="gallery-item"
          />
        ))}
      </div>
      
      {selectedImage && (
        <div className="overlay" onClick={closeImage}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeImage}>&times;</span>
            <div className="detailed-view">
              <img src={selectedImage.src} alt="Selected" className="selected-image" />
              <div className="details">
                <p>{selectedImage.text}</p>
                <div className="actions">
                  <span className="likes"><i className="fa fa-heart"></i> {selectedImage.likes}</span>
                  <button onClick={handleLike}>Like</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;