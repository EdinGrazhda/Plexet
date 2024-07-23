import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faSquareWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="main">
      <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: '#ECEFF1' }}>
        <section className="d-flex flex-column flex-md-row justify-content-between p-4 text-white" style={{ backgroundColor: '#81f18e' }}>
          <div className=" socials d-flex justify-content-center justify-content-center align-items-center w-100">
            <a className="text-white mx-2 mx-md-3" href="https://www.instagram.com/plexet_ch?igsh=MXQwbW0zcWFzd2VkZg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem' }}>
              <FontAwesomeIcon icon={faSquareInstagram} size="2x" />
            </a>
            <a className="text-white mx-2 mx-md-3" href="https://api.whatsapp.com/send?phone=41796462626" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem' }}>
              <FontAwesomeIcon icon={faSquareWhatsapp} size="2x" />
            </a>
            <a className="text-white mx-2 mx-md-3" href="https://www.facebook.com/profile.php?id=61563409940325" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem' }}>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
        </section>
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Plexet</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>Tous les souhaits en un seul endroit !</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Des produits</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><a href="Galery" className="text-dark">Galerie</a></p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><i className="fas fa-home mr-3"></i> Suisse</p>
                <p><i className="fas fa-envelope mr-3"></i> info@plexet.ch</p>
                <p><i className="fas fa-phone mr-3"></i> +41 79 646 26 26</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          Plexet
        </div>
      </footer>
    </div>
  );
}

export default Footer;
