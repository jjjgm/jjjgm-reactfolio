import React from 'react';

import '../styles/About.css';

import aboutMe from '../assets/mthollywood.jpg';


function About() {
    return (

<div className="aboutContainer">

    <h2>I enjoy road and gravel cycling, puzzles, streamlining workflows, and sour candy.</h2>

    <p> I'm passionate about continous self-improvement,  effective communication styles, and learning more about innovations/ advancements in numerous fields that artificial intelligence will bring.
    </p>

    <img className='aboutMe' src={aboutMe} alt="aboutMe" />

    </div>

);
}

export default About;