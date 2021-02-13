import React from 'react';
import { Link } from 'gatsby';

import Star from '../images/greenstar.png';
import Circle from '../images/bluecircle.png';
import Diamond from '../images/reddiamond.png';
import Triangle from '../images/yellowtriangle.png';

import './projects.scss';

export const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <Link to="/projects/soundmaps">
          <div className="project-container diamond-container">
            <div className="background">
              <img src={Diamond} alt="Diamond" />
            </div>
            <div className="project-description">
              <article>
                <h4 className="project-title">SoundMaps</h4>
                <p>Music + Social based app</p>
              </article>
            </div>
          </div>
        </Link>
        <div class="project-container star-container">
          <div className="background">
            <img src={Star} alt="Star" />
          </div>
          <div className="project-description">
            <article>
              <h4 className="project-title">New Leaf Kiosk</h4>
              <p>Kiosk based dispensary checkout + education tool</p>
            </article>
          </div>
        </div>
        <div class="project-container circle-container">
          <div className="background">
            <img src={Circle} alt="Circle" />
          </div>
          <div className="project-description">
            <article>
              <h4 className="project-title">Gesture-Controlled Stove</h4>
              <p>Contactless kitchen tool</p>
            </article>
          </div>
        </div>
        <div class="project-container triangle-container">
          <div className="background">
            <img src={Triangle} alt="Triangle" />
          </div>

        </div>
      </div>
    </section>
  );
}
