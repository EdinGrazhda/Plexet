import React from 'react';
import './Gallery.css';
import { motion } from 'framer-motion';

const Gallery = ({ photos, selectedCategory }) => {
  return (
    <motion.div Layout className="gallery">
      {photos
        .filter(photo => selectedCategory === 'Tout' || photo.category === selectedCategory)
        .map(photo => (
          <img key={photo.id} src={photo.src} alt={photo.category} />
        ))}
    </motion.div>
  );
};  

export default Gallery;

