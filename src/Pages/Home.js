import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Pages/Home.css';
import logo from '../Images/icons/logo2.png';
import rectangle from '../Images/Plastik/Plastik5.jpg';
import whatsapp from '../Images/WhatsApp.svg';
import support from '../Images/Support.svg';
import search from '../Images/Search.svg';
import firstpic from '../Images/Rectangle 5.svg';
import secondpic from '../Images/Rectangle 7.svg';
import Pause from '../Images/Rectangle 8.svg';
import Location from '../Images/Rectangle 25.svg';
import Galery from '../Images/Rectangle 32.svg';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import dekor from '../Images/Dekor/Dekor10.jpg';
import mobilje from '../Images/Mobilje/Mobilje3.jpg';
import plastik from '../Images/Plastik/Plastik5.jpg';
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ijcv1rq', 'template_2x0lquv', form.current, 'GvASgPpCdu3yhTniq')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <div>
      {/* Navbar */}
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
              <Link className="nav-link" to="/productQuality">Product Quality</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      
      {/* First Part */}
      <div className='firstpart'>
        <div className='firstleft'>
          <h1 className='firsttext'>Plexet</h1>
          <center>
            <div className="loader"></div>
          </center>
          <h1 className='secondtext'>
            Pour une expérience de qualité supérieure et unique, Plexet est à votre service. Pour en savoir plus sur nos projets, cliquez sur le bouton ci-dessous.
          </h1>
          <div className="inline-container">
            <Link to='/productquality'>
              <button className='butti'>Cliquez ici</button>
            </Link>
            <a href="https://api.whatsapp.com/send?phone=41796462626" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className="iconstyle" />
            </a>
            <a href="https://www.instagram.com/plexet_ch?igsh=MXQwbW0zcWFzd2VkZg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="iconstyle" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61563409940325" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="iconstyle" />
            </a>
          </div>
        </div>
        <div className='firstright'>
          <img className='firstimg' src={rectangle} alt="First Image" />
        </div>
      </div>

      {/* Presentation Part */}
      <div>
        <center>
          <h1 className='presentation'>Présentation.</h1>
        </center>
      </div>
      <center>
        <div className="loader"></div>
      </center>
      <div className='secondpart'>
        <div className='left1'>
          <img className='secondpic1' src={firstpic} alt="Second Pic 1" />
          <img className='secondpic2' src={secondpic} alt="Second Pic 2" />
        </div>
        <div className='right1'>
          <h2 className='righttext'>
            Voici la liste des créations fait par PlexET 
            Protection des machines.
            Luminaire.
            Industrie horlogère.
            Pièces destinées aux opplication dès laboratoires ou médicales.
            Présentoirs et supports Publicitaires.
            Équipements des écrans,enseignes,Lumière.
            Protection extérieurs,marquises et auvents 
            Meuble Agencements.
            Protection de vitres de bateau.
            Moquette modélisme.
          </h2>
          <div className='presentationpart'>
            <Link to='/about'>
              <button>Cliquez ici</button>
            </Link>
            <img src={support} alt="Support Icon" />
            <img src={search} alt="Search Icon" />
          </div>
        </div>
      </div>

      {/* SVG Separator */}
      <svg xmlns="http://www.w3.org/2000/svg" className='svg' viewBox="0 0 1440 320">
        <path fill="rgba(129, 241, 142, 1)" fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,186.7C384,203,480,213,576,202.7C672,192,768,160,864,154.7C960,149,1056,171,1152,192C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

      {/* Image Slider */}
      <div className='imageslider3'>   
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={mobilje} className="d-block w-100" alt="Meubles" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Meubles</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={dekor} className="d-block w-100" alt="Décor" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Décor</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={plastik} className="d-block w-100" alt="Plastique" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Plastique</h5>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
            <i className="fas fa-chevron-left" aria-hidden="true"></i>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
            <i className="fas fa-chevron-right" aria-hidden="true"></i>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>

      {/* Gallery Part */}
      <div className='galeri'>
        <div className='galerileft'>
          <h1 className='presentation'>Galeri</h1>
          <center>
            <div className="loader"></div>
          </center>
          <h2 className='galeritext1'>
            Bienvenue dans la Galerie de notre société Plexet. Pour voir des produits plus spécifiques et plus récents sur le marché ainsi que des produits uniques prouvés, visitez nos œuvres en cliquant sur le bouton ci-dessous
          </h2>
          <Link to="/galery">
            <button>Cliquez ici</button>
          </Link>
        </div>
        <div className='galeriright'>
          <img className='galeryimg' src={Galery} alt="Gallery" />
        </div>
      </div>

      {/* Location and Contact Part */}
      <div className='location d-flex justify-content-center align-content-center '>
        <div className='locationright'>
          <h1 className='presentation'>Location</h1>
          <center>
            <div className="loader"></div>
          </center>
          <iframe className='locationimg mt-5 mb-5'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.503854187306!2d6.628140004876604!3d46.575633955012194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c333f2c7d9baf%3A0x8f83a3a97d240912!2sPlexET%20Plexiglas!5e0!3m2!1sen!2s!4v1721774274416!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div>
        <div className='d-flex justify-content-center align-content-center'>
        <a href="mailto:info@plexet.ch" className="email-icon"><span className='emailtext'>Via Email</span></a> 
        </div>
        <div className=' d-flex justify-content-center align-content-center'>
      <a href="mailto:info@plexet.ch" className="email-icon">
      <FontAwesomeIcon icon={faEnvelope} size="2x" />
    </a>
    </div>
      </div>
        </div>
        
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
