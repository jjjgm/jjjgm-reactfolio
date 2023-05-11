import React from 'react';



import landingImage from '/Users/jennifer/bootcamp/homework/jjjgm-reactfolio/src/assets/casestudy.JPG';

import '../styles/Home.css';


function Home() {
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

            <div className="card">
                <img src={landingImage} alt="My Image" />
                </div>
                
            </div>
    );
}

export default Home;