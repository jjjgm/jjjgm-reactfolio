import React from 'react'

import landingImage from '../assets/casestudy.JPG';


export default function Home() {
    return (
        <div className="home">

            <h1 className="greeting">
                Hello!
            </h1>

            <h2 className="myName">
                I'm Jennifer
            </h2>

            <h3 className="roleTitle">
                I'm a Full Stack Developer in Los Angeles
            </h3>


            <img className='myImage' src={landingImage} alt="My Image" />
        </div>
    );
}

