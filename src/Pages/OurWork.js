import React from 'react'
import '../Pages/OurWork.css';
import logo from '../Images/logo123.svg';

const OurWork = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img src={logo} alt="Logo" width="40" height="24" className="d-inline-block align-text-top">
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
    </div>
  )
}

export default OurWork
