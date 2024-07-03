import React from 'react'
import '../Pages/About.css';
import logo from '../Images/logo123.svg';
import lamp from '../Images/Rectangle 73.svg'
import { useState } from 'react';
import first from '../Images/04d7075a-0fc8-459c-971e-7dc33fc5c3e1.jpg';
import second from '../Images/682592b9-e705-467e-95d1-240b36daf0df.jpg'
const text1Options = [
  "Why art is so important",
  "Why you shouldn't buy the new iPhone",
  "Is life actually real?",
  "How to learn JS in 2 months"
];
const text2Options = [
  "69 min. read",
  "7 min. read",
  "8 min. read",
  "87,658.1277 min. read"
];
const colorOptions = ["#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1"];
const imageOptions = [
  "https://images.unsplash.com/photo-1524721696987-b9527df9e512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80",
  "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1506073828772-2f85239b6d2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
  "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
];
const About = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % text1Options.length);
  };

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + text1Options.length) % text1Options.length);
  };

  return (
     <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
    <img src={logo} alt="Logo" width="40" height="24" class="d-inline-block align-text-top">
</img>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="ourwork">Our Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href='contact'>Contact</a>
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
    <p className='aboutp'>Aucune méthode de formatage.   Perçage, gravure et découpe laser. .Thermoformage. .Usinage, pliage à chaud. .La connexion à deux composants. .Sablage, brossage et polissage. .Lettres découpées ou laser sur plexiglas, inox, scrap. (La police et la hauteur de la police doivent être précisées lors de la commande).</p>
    </div>
    </div>
    </div>
  )
}

export default About
