import React from 'react';

import Header from '../components/Header';
import About from '../components/About';

import '../styles/Home.css';


function Home() {
    return (
        <div className="home">
            <Header/>
            </div>,
        <div className="homeContainer">
            <About/>
            </div>
            
    );
}

export default Home;