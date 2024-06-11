import React, { useState } from 'react';
import logo from '../Images/logo123.svg';
import CategoryFilter from '../components/CategoryFilter';
import Gallery from '../components/Gallery';
import './Galery.css';
import foto1 from '../Images/foto3.jpg';
import foto2 from '../Images/foto4.jpg';
import foto3 from '../Images/foto5.jpg';
import foto4 from '../Images/foto12.jpg';
import metal from '../Images/metal.jpg';
import metal1 from '../Images/metal1.jpg';
import metal2 from '../Images/metal3.jpg';
import metal3 from '../Images/metal4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSquareInstagram, faSquareWhatsapp,faFacebook } from '@fortawesome/free-brands-svg-icons';


const Galery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const photos = [
    { id: 1, category: 'Plastik', src:foto1 },
    { id: 2, category: 'Plastik', src: foto1},
    { id: 3, category: 'Metal', src: metal3 },
    { id: 4, category: 'Metal', src: metal2 },
    { id: 5, category: 'Mobilje', src: foto2},
    { id: 6, category: 'Mobilje', src: foto3},
    { id: 7, category: 'Mobilje', src: foto4},
    
    // Add more photos as needed
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    
    <div className="galery-page">
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="40" height="24" className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="ourwork">Our Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>GALERI</h1>
      <CategoryFilter onCategoryChange={handleCategoryChange} />
      <Gallery photos={photos} selectedCategory={selectedCategory} />

      <div className='footer'>
        <div className='socialMedias'>
          <a href=''><FontAwesomeIcon className='icon' icon={faSquareInstagram} /></a>
          <a href=''><FontAwesomeIcon className='icon'icon={faSquareWhatsapp} /></a>
          <a href=''><FontAwesomeIcon className='icon' icon={faFacebook} /></a>
        </div>
        <div className='navigation'>
          <a href=''><button>Home</button></a>
          <a href=''><button>About</button></a>
          <a href=''><button>Our Work</button></a>
          <a href=''><button>Galeri</button></a>
          <a href=''><button>Contact</button></a>
          
        </div>
        <div className='navigation2'>
              <h1>Copyright 2024@Plexet</h1>
          </div>
    </div>
    </div>
   
  );
};

export default Galery;
