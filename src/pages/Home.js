import React from 'react';

import Header from '../components/Header';
import About from '../components/About';


function Home() {
    return (
        <div className="flex-row">
            <Header/>
            </div>,
        <div className="container">
            <About/>
            </div>
    );
}

export default Home;