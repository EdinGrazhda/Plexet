import React, { useState } from 'react';
import logo from '../Images/logo123.svg';
import CategoryFilter from '../components/CategoryFilter';
import Gallery from '../components/Gallery';
import './Galery.css';
import plastik from  '../Images/Plastik/plastik.jpg';
import plastik1 from '../Images/Plastik/Plastik1.jpg';
import plastik2 from '../Images/Plastik/Plastik2.jpg';
import plastik3 from '../Images/Plastik/Plastik3.jpg';
import plastik4 from '../Images/Plastik/Plastik4.jpg';
import plastik5 from '../Images/Plastik/Plastik5.jpg';
import mobilje from '../Images/Mobilje/Mobilje.jpg';
import mobilje1 from '../Images/Mobilje/Mobilje1.jpg';
import mobilje2 from '../Images/Mobilje/Mobilje2.jpg';
import mobilje3 from '../Images/Mobilje/Mobilje3.jpg';
import mobilje4 from '../Images/Mobilje/Mobilje4.jpg';
import mobilje5 from '../Images/Mobilje/Mobilje5.jpg';
import mobilje6 from '../Images/Mobilje/Mobilje6.jpg';
import mobilje7 from '../Images/Mobilje/Mobilje7.jpg';
import dekor from '../Images/Dekor/Dekor.jpg';
import dekor1 from '../Images/Dekor/Dekor1.jpg';
import dekor2 from '../Images/Dekor/Dekor2.jpg';
import dekor3 from '../Images/Dekor/Dekor3.jpg';
import dekor4 from '../Images/Dekor/Dekor4.jpg';
import dekor5 from '../Images/Dekor/Dekor5.jpg';
import dekor6 from '../Images/Dekor/Dekor6.jpg';
import dekor7 from '../Images/Dekor/Dekor7.jpg';
import dekor8 from '../Images/Dekor/Dekor8.jpg';
import dekor9 from '../Images/Dekor/Dekor9.jpg';
import dekor10 from '../Images/Dekor/Dekor10.jpg';
import dekor11 from '../Images/Dekor/Dekor11.jpg';
import dekor12 from '../Images/Dekor/Dekor12.jpg';
import dekor13 from '../Images/Dekor/Dekor13.jpg';
import dekor14 from '../Images/Dekor/Dekor14.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faSquareWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Galery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const photos = [
    { id: 1, category: 'Plastik', src: plastik },
    { id: 2, category: 'Plastik', src: plastik1 },
    { id: 3, category: 'Plastik', src: plastik2 },
    { id: 4, category: 'Plastik', src: plastik3 },
    { id: 5, category: 'Plastik', src: plastik4 },
    { id: 6, category: 'Plastik', src: plastik5 },
    { id: 7, category: 'Mobilje', src: mobilje },
    { id: 8, category: 'Mobilje', src: mobilje1 },
    { id: 9, category: 'Mobilje', src: mobilje2 },
    { id: 10, category: 'Mobilje', src: mobilje3 },
    { id: 11, category: 'Mobilje', src: mobilje4 },
    { id: 12, category: 'Mobilje', src: mobilje5 },
    { id: 13, category: 'Mobilje', src: mobilje6 },
    { id: 14, category: 'Dekor', src: dekor },
    { id: 15, category: 'Dekor', src: dekor1 },
    { id: 16, category: 'Dekor', src: dekor2 },
    { id: 17, category: 'Dekor', src: dekor3 },
    { id: 18, category: 'Dekor', src: dekor4 },
    { id: 20, category: 'Dekor', src: dekor5 },
    { id: 21, category: 'Dekor', src: dekor6 },
    { id: 22, category: 'Dekor', src: dekor7 },
    { id: 23, category: 'Dekor', src: dekor8 },
    { id: 24, category: 'Dekor', src: dekor9 },
    { id: 25, category: 'Dekor', src: dekor10 },
    { id: 26, category: 'Dekor', src: dekor11 },
    { id: 27, category: 'Dekor', src: dekor12 },
    { id: 28, category: 'Dekor', src: dekor13 },
    { id: 29, category: 'Dekor', src: dekor14 },
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
      <h1 className='text1'>GALERI</h1>
      <CategoryFilter onCategoryChange={handleCategoryChange} />
      <Gallery photos={photos} selectedCategory={selectedCategory} />

      <div className='footer'>
        <div className='socialMedias'>
          <a href=''><FontAwesomeIcon className='icon' icon={faSquareInstagram} /></a>
          <a href=''><FontAwesomeIcon className='icon' icon={faSquareWhatsapp} /></a>
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
