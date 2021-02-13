import React from 'react';
import { Link } from 'gatsby';

import './header.scss';

/**
 * 
 */
export const Header = () => {
  return (
    <header>
      <div class="header-and-nav">
        <h1 class="header-title">Welcome to Corey's Portfolio.</h1>
        <nav class="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
      <p class="header-description">
        Welcome to my portfolio! I am glad you found your way here. My portfolio is filled with works I've done during my
        time at California College of the Arts. Please take a look and reach out if you'd like to discuss any potential
        working opportunities!
      </p>
      <div class="header-bottom-bar" />
    </header>
  )
}