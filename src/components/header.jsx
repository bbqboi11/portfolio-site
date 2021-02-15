import React from 'react';
import { Link } from 'gatsby';

import './header.scss';

/**
 * 
 */
export const Header = () => {
  return (
    <header>
      <div className="content">
        <h1 className="header-title">Welcome to Corey Rossi's Portfolio.</h1>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <p className="header-description">
          Welcome to my portfolio! I am glad you found your way here. My portfolio is filled with works I've done during my
          time at California College of the Arts. Please take a look and reach out if you'd like to discuss any potential
          working opportunities!
        </p>
        <div className="header-bottom-bar" />
      </div>
    </header>
  )
}