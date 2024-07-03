import React from 'react';
import logo from '../Images/logo123.svg';
import foto from '../Images/foto3.jpg';
import foto1 from '../Images/foto4.jpg';
import foto2 from '../Images/foto5.jpg';
import foto3 from '../Images/foto9.jpg';
import icon from '../Images/icons/fullhd1.png';
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
            <h3 className="box-title">Lorem Ipsum</h3>
              <p className="user-follow-info">Lorem Ipsum <FontAwesomeIcon icon={faUser} /></p>
            </div>
            <p className="description">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </div>
          <a href="#" className="button">Follow Kelsie</a>
        </div>  
        <div className="box">
          <div className="box-top">
            <img className="box-image" src={foto3}  />
            <div className="title-flex">
            <h3 className="box-title">Lorem Ipsum</h3>
              <p className="user-follow-info">Lorem Ipsum <FontAwesomeIcon icon={faUser} /></p>
            </div>
            <p className="description">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </div>
          <a href="#" className="button">Follow Kelsie</a>
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src={foto2}  />
            <div className="title-flex">
            <h3 className="box-title">Lorem Ipsum</h3>
              <p className="user-follow-info">Lorem Ipsum <FontAwesomeIcon icon={faUser} /></p>
            </div>
            <p className="description">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </div>
          <a href="#" className="button">Follow Kelsie</a>
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src={foto1}  />
            <div className="title-flex">
            <h3 className="box-title">Lorem Ipsum</h3>
              <p className="user-follow-info">Lorem Ipsum <FontAwesomeIcon icon={faUser} /></p>
            </div>
            <p className="description">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </div>
          <a href="#" className="button">Follow Kelsie</a>
        </div>
      </div>
      



      <div className="wrap1 container">
        <div className="box">
          <div className="box-top">
            <img className="box-image" src={foto} />
            <div className="title-flex">
              <h3 className="box-title">Lorem Ipsum</h3>
              <p className="user-follow-info">Lorem Ipsum <FontAwesomeIcon icon={faUser} /></p>
            </div>
            <p className="description">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </div>
          <a href="#" className="button">Follow Kelsie</a>
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src={foto} />
            <div className="title-flex">
              <h3 className="box-title">Mark Carusso</h3>
              <p className="user-follow-info">33 Projects <FontAwesomeIcon icon={faUser} /></p>
            </div>
            <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
          </div>
          <a href="#" className="button">Follow Mark</a>
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src={foto} />
            <div className="title-flex">
              <h3 className="box-title">Taylor Green</h3>
              <p className="user-follow-info">26 Projects <FontAwesomeIcon icon={faUser} /></p>
            </div>
            <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
          </div>
          <a href="#" className="button">Follow Taylor</a>
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src={foto} />
            <div className="title-flex">
              <h3 className="box-title">Isaiah Jian</h3>
              <p className="user-follow-info">12 Projects <FontAwesomeIcon icon={faUser} /></p>
            </div>
            <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
          </div>
          <a href="#" className="button">Follow Isaiah</a>
        </div>
      </div>


    <Footer/>
    </div>
  );
}

export default ProductQuality;
