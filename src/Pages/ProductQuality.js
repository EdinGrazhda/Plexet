import React from 'react';
import logo from '../Images/logo123.svg';
import foto from '../Images/foto3.jpg';
import foto1 from '../Images/foto4.jpg';
import foto2 from '../Images/foto5.jpg';
import foto3 from '../Images/foto9.jpg';
import icon from '../Images/icons/fullhd1.png';
import foto4 from '../Images/Dekor/Dekor.jpg';
import foto5 from '../Images/Dekor/Dekor4.jpg';
import foto6 from '../Images/Dekor/Dekor8.jpg';
import foto7 from '../Images/Dekor/Dekor9.jpg';
import foto8 from '../Images/Dekor/Dekor2.jpg';
import foto9 from '../Images/Mobilje/Mobilje1.jpg';
import foto10 from '../Images/Mobilje/Mobilje2.jpg';
import foto11 from '../Images/Mobilje/Mobilje3.jpg';
import foto12 from '../Images/Plastik/Plastik1.jpg';
import foto13 from '../Images/Plastik/Plastik2.jpg';
import foto14 from '../Images/Plastik/Plastik3.jpg';
import foto15 from '../Images/Plastik/Plastik4.jpg';
import Footer from '../components/Footer';
import './ProductQuality.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSquareInstagram, faSquareWhatsapp,faFacebook } from '@fortawesome/free-brands-svg-icons';

function ProductQuality() {
  return (
    <div>
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
    
    <div className='text'>
      
        <h1>Produits et qualité</h1>
    </div>

    <div className='box1 container '>
      <div className='text-box'>
        <h1 >Certains de nos produits ont laissé nos clients très satisfaits, tant du point de vue de la qualité que du point de vue du travail. N'hésitez pas à nous contacter pour plus d'informations. Le personnel de Plexetit est à votre disposition pour toute demande des clients.
        </h1>
      </div>
      <div className='image-box'>
        <img className='image' src={icon}/>
      </div>

    </div>

      <div className="wrap container">
        <div className="box">
          <div className="box-top">
            <img className="box-image" src={foto} />
            <div className="title-flex">
            <h3 className="box-title1">Décorations en plastique</h3>
            </div>
          </div>
         
        </div>  
        <div className="box">
          <div className="box-top">
            <img className="box-image" src={foto3}  />
            <div className="title-flex">
            <h3 className="box-title1">Décorations en métal </h3>
       
            </div>
            
          </div>
         
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src={foto2}  />
            <div className="title-flex">
            <h3 className="box-title1">Décorations en verre</h3>
    
            </div>
           
          </div>
          
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src={foto1}  />
            <div className="title-flex">
            <h3 className="box-title1">décorations pour la maison</h3>
            </div>
          
          </div>
          
        </div>
      </div>
      



      <div className="wrap1 container">
        <div className="box">
          <div className="box-top">
            <img className="box-image" src={foto} />
            <div className="title-flex">
              <h3 className="box-title1">Lorem Ipsum</h3>
             
            </div>
            
          </div>
          
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src={foto} />
            <div className="title-flex">
              <h3 className="box-title1v">Mark Carusso</h3>
             
            </div>
          
          </div>
          
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src={foto} />
            <div className="title-flex">
              <h3 className="box-title1">Taylor Green</h3>
              
            </div>
        
          </div>
        
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src={foto} />
            <div className="title-flex">
              <h3 className="box-title1">Isaiah Jian</h3>
              
            </div>
         
          </div>
          
        </div>
      </div>


    <Footer/>
    </div>
  );
}

export default ProductQuality;
