import React from 'react';
import { Link } from 'gatsby';

import { ImageBox } from '../components/imageBox';

import Star from '../images/greenstar.png';
import Circle from '../images/bluecircle.png';
import Diamond from '../images/reddiamond.png';
import Triangle from '../images/yellowtriangle.png';

import './projects.scss';

export const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid-container">
        <div className="projects-grid">
          <Link to="/projects/soundmaps">
            <ImageBox imageSrc={Diamond} imageAlt="Diamond" className="diamond">
              <article className="project-description">
                <h4 className="project-title">SoundMaps</h4>
                <p>Music + Social based app</p>
              </article>
            </ImageBox>
          </Link>
          <ImageBox imageSrc={Star} imageAlt="Star" className="star">
            <article className="project-description">
              <h4 className="project-title">New Leaf Kiosk</h4>
              <p>Kiosk based dispensary checkout + education tool</p>
            </article>
          </ImageBox>
          <ImageBox imageSrc={Circle} imageAlt="Circle" className="circle">
            <article className="project-description">
              <h4 className="project-title">Gesture-Controlled Stove</h4>
              <p>Contactless kitchen tool</p>
            </article>
          </ImageBox>
          <ImageBox imageSrc={Triangle} imageAlt="Triangle" className="triangle" />
        </div>
      </div>
    </section>
  );
}
