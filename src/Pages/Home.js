import React from 'react'
import '../Pages/Home.css'
import logo from '../Images/logo123.svg';
import rectangle from '../Images/Rectangle 19.svg';
import whatsapp from '../Images/WhatsApp.svg';
import green from '../Images/Rectangle 36.svg'
const Home = () => {
  return (
    //Navbar
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
{/* //navbar */}
 <div  className='firstpart'>
  <div className='firstleft'>
   <h1>LOREM IPSUM</h1>
   <h3>Lorem Ipsum Lorem Ipsum Lorem Ipsum
Lorem Ipsum Lorem Ipsum Lorem Ipsum
Lorem Ipsum Lorem Ipsum Lorem Ipsum
Lorem Ipsum Lorem Ipsum Lorem Ipsum</h3>
<button>Lorem Ipsum</button> <br></br>
<img src={whatsapp}></img>
  </div>
  <div className='firstright'>
   <img className='firstimg' src={rectangle}></img>
  </div>
 </div>
    </div>
  )
}

export default Home
