import React from 'react';
import './CategoryFilter.css';
import { motion } from 'framer-motion';

const CategoryFilter = ({ onCategoryChange }) => {
  
  const categories = ['All', 'Plastik', 'Mobilje','Dekor'];
  
  return (
    <motion.div className="category-filter">
      {categories.map(category => (
        <button key={category} onClick={() => onCategoryChange(category)}>
          {category}
        </button>
      ))}
    </motion.div >
  );
};

export default CategoryFilter;
