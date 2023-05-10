import React from 'react';

import Navbar from './components/Navbar'
import Home from './pages'
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Navbar />
    </div>,
    <div className="container">
      <Home />
    </div>,

    <Portfolio />,
    <Contact />,
    <Footer />
  )
}

export default App;
