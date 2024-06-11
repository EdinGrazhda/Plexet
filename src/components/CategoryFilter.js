import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ onCategoryChange }) => {
  const categories = ['All', 'Plastik', 'Metal', 'Mobilje'];

  return (
    <div className="category-filter">
      {categories.map(category => (
        <button key={category} onClick={() => onCategoryChange(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
