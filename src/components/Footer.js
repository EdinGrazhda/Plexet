import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faSquareWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div>
     <div className="main">
        <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: '#ECEFF1' }}>
          <section className="d-flex justify-content-between p-4 text-white" style={{ backgroundColor: '#81f18e' }}>
            <div className="me-5">
              <span style={{ fontWeight:800 }}>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="" className="text-white me-4">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="" className="text-white me-4">
                <FontAwesomeIcon icon={faSquareInstagram} />
              </a>
              <a href="" className="text-white me-4">
                <FontAwesomeIcon icon={faSquareWhatsapp} />
              </a>
              <a href="" className="text-white me-4">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </section>

          <section >
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Company name</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p>
                    <a href="#!" className="text-dark">MDBootstrap</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">MDWordPress</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">BrandFlow</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Bootstrap Angular</a>
                  </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p>
                    <a href="#!" className="text-dark">Your Account</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Become an Affiliate</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Shipping Rates</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Help</a>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                  <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                  <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                </div>
              </div>
            </div>
          </section>
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
        </footer>
    </div>
    </div>
  );
}

export default Footer;
