import React from 'react';
import { Link } from 'react-router-dom';

// import jjjgmMono from '../assets'

function Header() {
    return (
        <div className="header">
            <div className="monogram">
                {/* may add svg generated monogram here from a previous proj. TBD */}
                {/* <img src={jjjgmMono}/> */}
            </div>
            
            <div className="nav">
            
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                
                {/* resume is currently a WIP link... */}
                {/* <Link to="/resume">Resume</Link> */}
            </div>
        </div>
    )
}

export default Header;