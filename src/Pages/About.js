import React from 'react'
import '../Pages/About.css';
import logo from '../Images/logo123.svg';
import lamp from '../Images/Rectangle 73.svg'
import { useState, useEffect } from 'react';
import first from '../Images/04d7075a-0fc8-459c-971e-7dc33fc5c3e1.jpg';
import second from '../Images/682592b9-e705-467e-95d1-240b36daf0df.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import firstpic from '../Images/Dekor/Dekor.jpg';
import secondpic from '../Images/Mobilje/Mobilje2.jpg';
import thirdpic from '../Images/Plastik/Plastik2.jpg';
const text1Options = [
  "Meubles",
  "Décor",
  "Plastique"
];
const text2Options = [
  "Plexet",
  "Plexet",
  "Plexet"
];
const colorOptions = ["#EBB9D2", "#FE9968", "#7FE0EB"];
const imageOptions = [
  secondpic,
  firstpic,
  
  thirdpic
];
const About = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % text1Options.length);
  };

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + text1Options.length) % text1Options.length);
  };

  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="60" height="24" className="d-inline-block align-text-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Galery">Galeri</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ProductQuality">Product Quality</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
<div className='aboutpart'>
    
    <div className='aboutright'>
    <p className='aboutp'>Vos techniques et matières:

Plaques en plexi (PMMA GS Coulé 2030/3050 mm, diverses épaisseurs et couleurs).
Plaques en plexi (PMMA XT Extrudé 2050/3050 mm, diverses épaisseurs et couleurs).
Plexi en blocs, barres carrées ou rondes et de différents profils.
Tubes transparents, opales et satinés de différents diamètres.
Polycarbonate UV et plaques double paroi (alvéolaire).
PVC transparent et de couleurs.
PVC expansé.</p>
    </div>
    <div className='aboutleft'>
    <img className='lamp' src={first}></img>
    </div>
    </div>
<div id="carousel-wrapper">
      <div id="menu" style={{ background: colorOptions[index] }}>
        <div id="current-option">
          <span id="current-option-text1" data-previous-text="" data-next-text="">
            {text1Options[index]}
          </span>
          <span id="current-option-text2" data-previous-text="" data-next-text="">
            {text2Options[index]}
          </span>
        </div>
        <button id="previous-option" onClick={handlePrevious}></button>
        <button id="next-option" onClick={handleNext}></button>
      </div>
      <div id="image" style={{ backgroundImage: `url(${imageOptions[index]})` }}></div>
    </div>
    <div className='aboutpart'>
    <div className='aboutleft'>
    <img className='lamp' src={lamp}></img>
    </div>
    <div className='aboutright'>
    <p className='aboutp'>Aucune méthode de formatage.Perçage, gravure et découpe laser..Thermoformage..Usinage, pliage à chaud..La connexion à deux composants..Sablage, brossage et polissage..Lettres découpées ou laser sur plexiglas, inox, scrap.(La police et la hauteur de la police doivent être précisées lors de la commande).</p>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About