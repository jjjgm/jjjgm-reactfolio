import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Home.css';

// import jjjgmMono from '../assets'

function Header() {
    return (
        <div className="header">
            
            <div className="nav">
            
                <li>
                    <Link className='link' to="/" style={{ textDecoration: 'none'}}>Home</Link>
                </li>

                <li>
                    <Link to="/about" style={{ textDecoration: 'none'}}>About</Link>
                </li>

                <li>
                    <Link to="/portfolio" style={{ textDecoration: 'none'}}>Portfolio</Link>
                </li>

                <li>
                    <Link to="/resume" style={{ textDecoration: 'none'}}>Resume</Link>
                </li>
                
                <li>
                    <Link to="/contact" style={{ textDecoration: 'none'}}>Contact</Link>
                </li>

                
                {/* resume is currently a WIP link... */}
                {/* <Link to="/resume">Resume</Link> */}
            </div>
        </div>
    )
}

export default Header;