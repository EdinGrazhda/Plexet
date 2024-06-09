import React from 'react';
import logo from '../Images/logo123.svg';
import '../Pages/ProductQuality.css'

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
        <h1>Produits er qualite</h1>
    </div>

      <div className="wrap container">
        <div className="box">
          <div className="box-top">
            <img className="box-image" src="https://images.unsplash.com/photo-1622219809260-ce065fc5277f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMwNjYxOQ&ixlib=rb-1.2.1&q=85" alt="Girl Eating Pizza" />
            <div className="title-flex">
              <h3 className="box-title">Kelsie Meyer</h3>
              <p className="user-follow-info">17 Projects</p>
            </div>
            <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
          </div>
          <a href="#" className="button">Follow Kelsie</a>
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src="https://images.unsplash.com/photo-1488161628813-04466f872be2?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNTMwNQ&ixlib=rb-1.2.1&q=85" alt="Girl Eating Pizza" />
            <div className="title-flex">
              <h3 className="box-title">Mark Carusso</h3>
              <p className="user-follow-info">33 Projects</p>
            </div>
            <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
          </div>
          <a href="#" className="button">Follow Mark</a>
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src="https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNTQzNA&ixlib=rb-1.2.1&q=85" alt="Girl Eating Pizza" />
            <div className="title-flex">
              <h3 className="box-title">Taylor Green</h3>
              <p className="user-follow-info">26 Projects</p>
            </div>
            <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
          </div>
          <a href="#" className="button">Follow Taylor</a>
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNjA1MA&ixlib=rb-1.2.1&q=85" alt="Girl Eating Pizza" />
            <div className="title-flex">
              <h3 className="box-title">Isaiah Jian</h3>
              <p className="user-follow-info">12 Projects</p>
            </div>
            <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
          </div>
          <a href="#" className="button">Follow Isaiah</a>
        </div>
      </div>
      



      <div className="wrap1 container">
        <div className="box">
          <div className="box-top">
            <img className="box-image" src="https://images.unsplash.com/photo-1622219809260-ce065fc5277f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMwNjYxOQ&ixlib=rb-1.2.1&q=85" alt="Girl Eating Pizza" />
            <div className="title-flex">
              <h3 className="box-title">Kelsie Meyer</h3>
              <p className="user-follow-info">17 Projects</p>
            </div>
            <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
          </div>
          <a href="#" className="button">Follow Kelsie</a>
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src="https://images.unsplash.com/photo-1488161628813-04466f872be2?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNTMwNQ&ixlib=rb-1.2.1&q=85" alt="Girl Eating Pizza" />
            <div className="title-flex">
              <h3 className="box-title">Mark Carusso</h3>
              <p className="user-follow-info">33 Projects</p>
            </div>
            <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
          </div>
          <a href="#" className="button">Follow Mark</a>
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src="https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNTQzNA&ixlib=rb-1.2.1&q=85" alt="Girl Eating Pizza" />
            <div className="title-flex">
              <h3 className="box-title">Taylor Green</h3>
              <p className="user-follow-info">26 Projects</p>
            </div>
            <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
          </div>
          <a href="#" className="button">Follow Taylor</a>
        </div>
        <div className="box">
          <div className="box-top">
            <img className="box-image" src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNjA1MA&ixlib=rb-1.2.1&q=85" alt="Girl Eating Pizza" />
            <div className="title-flex">
              <h3 className="box-title">Isaiah Jian</h3>
              <p className="user-follow-info">12 Projects</p>
            </div>
            <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
          </div>
          <a href="#" className="button">Follow Isaiah</a>
        </div>
      </div>

    </div>
  );
}

export default ProductQuality;
