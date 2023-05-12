import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'

import Header from './components/Header'
import Home from './pages/Home'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
        <Footer/>
        </div>
    </Router>
  );
}

export default App;
