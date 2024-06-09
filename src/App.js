import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurWork from './Pages/OurWork';
import ProductQuality from './Pages/ProductQuality';




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/ourwork" element={<OurWork />} />
        <Route exact path="/ProductQuality" element={<ProductQuality />} />

      
      </Routes>
    </BrowserRouter>
  );
};

export default App;