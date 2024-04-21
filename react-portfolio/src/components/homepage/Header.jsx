import React from 'react';
import { Link } from 'react-router-dom';
import '../css/homepage/Header.css';
function Header(){
    return (
      <header>
        <nav>
          <div className="left">Daksh's Portfolio</div>
          <div className="right">
            <ul>
              <li><a href="/">Home</a></li>
              <li><Link to="/about">About</Link></li>
              <li><a href="#middle">Experience</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
}

export default Header;
