import React from 'react'
import '../Pages/Home.css'
import logo from '../Images/logo123.svg';
import rectangle from '../Images/Rectangle 19.svg';
import whatsapp from '../Images/WhatsApp.svg';
import support from '../Images/Support.svg';
import search from '../Images/Search.svg';
import firstpic from '../Images/Rectangle 5.svg';
import secondpic from '../Images/Rectangle 7.svg';
import Pause from '../Images/Rectangle 8.svg';
import Location from '../Images/Rectangle 25.svg';
import Galery from '../Images/Rectangle 32.svg';
import Footer from '../components/Footer';
const Home = () => {
  return (
    //Navbar
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img src={logo} alt="Logo" width="40" height="24" class="d-inline-block align-text-top">
</img>
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
          <a className="nav-link " href='contact'>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

{/* //navbar */}
 <div  className='firstpart'>
  <div className='firstleft'>
   <h1 className='firsttext'>Plexet </h1>
   <h1 className='secondtext'>Pour une expérience de qualité supérieure et unique, Plexet est à votre service. Pour en savoir plus sur nos projets, cliquez sur le bouton ci-dessous.</h1>

<button>
Cliquez ici
</button>
<img src={whatsapp}></img>
  </div>
  <div className='firstright'>
   <img className='firstimg' src={rectangle}></img>
  </div>
 </div>
 
    <div>
     <center>
      <h1 className='presentation'>Présentation.</h1>
      </center>
    </div>
    <center>
 <div class="loader"></div>
 </center>
    <div className='secondpart'>
      <div className='left1'>
      <img className='secondpic1' src={firstpic}></img>
      <img className='secondpic2' src={secondpic}></img>
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
      <button>Cliquez ici
      </button>
      <img src={support}></img>
      <img src={search}></img>
      </div>
      </div>
      
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" className='svg' viewBox="0 0 1440 320"><path fill="rgba(129, 241, 142, 1)" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,186.7C384,203,480,213,576,202.7C672,192,768,160,864,154.7C960,149,1056,171,1152,192C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <div className='sliderpart'>
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Pause} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Pause} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Pause} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
<div className='galeri'>
<div className='galerileft'>
  
<h1 className='presentation'>Galeri</h1>
<center>
 <div class="loader"></div>
 </center>
<h2>
Bienvenue dans la Galerie de notre société Plexet. Pour voir des produits plus spécifiques et plus récents sur le marché ainsi que des produits uniques prouvés, visitez nos œuvres en cliquant sur le bouton ci-dessous
</h2>

<button>Cliquez sur</button>

</div>
<div className='galeriright'>
<img className='galeryimg' src={Galery}></img>
</div>
</div>
<div className='location'>
<div className='locationleft'>
<div className="card">
  <span class="title">Contact</span>
  <form class="form">
    <div class="group">
    <input placeholder='' type="text" required=""/>
    <label for="name">Nom ...</label>
    </div>
<div class="group">
    <input placeholder="" type="email" id="email" name="email" required=""/>
    <label for="email">E-mail ...</label>
    </div>
<div class="group">
    <textarea placeholder="" id="comment" name="comment" rows="5" required=""></textarea>
    <label for="comment">Description ...</label>
</div>
    <button type="submit">soumettre</button>
  </form>
</div>

</div>
<div className='locationright'>
  <h1 className='presentation'>Location</h1>
  <center>
 <div class="loader"></div>
 </center>
<img className='locationimg' src={Location}></img>


</div>

</div>
<Footer/>
    </div>
  )
}

export default Home
