import React from 'react';
import './Gallery.css';

const Gallery = ({ photos, selectedCategory }) => {
  return (
    <div className="gallery">
      {photos
        .filter(photo => selectedCategory === 'All' || photo.category === selectedCategory)
        .map(photo => (
          <img key={photo.id} src={photo.src} alt={photo.category} />
        ))}
    </div>
  );
};  

export default Gallery;

