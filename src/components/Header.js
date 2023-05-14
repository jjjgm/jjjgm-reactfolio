import React from 'react';
import { Link } from 'react-router-dom';


// import jjjgmMono from '../assets'

function Header() {
    return (
            
            <div className="nav">
            
                <li>
                    <Link className='link' to="/" style={{ textDecoration: 'none'}}>Home</Link>
                </li>

                <li>
                    <Link className='link' to="/about" style={{ textDecoration: 'none'}}>About</Link>
                </li>

                <li>
                    <Link className='link' to="/portfolio" style={{ textDecoration: 'none'}}>Portfolio</Link>
                </li>

                <li>
                    <Link className='link' to="/resume" style={{ textDecoration: 'none'}}>Resume</Link>
                </li>
                
                <li>
                    <Link className='link' to="/contact" style={{ textDecoration: 'none'}}>Contact</Link>
                </li>

            </div>
        
    )
}

export default Header;