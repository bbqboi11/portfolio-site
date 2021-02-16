import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';

import './carousel.scss';

export const Carousel = ({ children, className }) => {
  const ref = React.useRef(null);
  const previous = () => ref.current?.slidePrev();
  const next = () => ref.current?.slideNext();

  return (
    <div className="carousel">
      <button className="arrow-left" onClick={previous}>
        <span className="material-icons">
          keyboard_arrow_left
        </span>
      </button>
      <AliceCarousel disableButtonsControls infinite ref={ref} className={className}>{children}</AliceCarousel>
      <button className="arrow-right" onClick={next}>
        <span className="material-icons">
          keyboard_arrow_right
        </span>
      </button>
    </div>
  );
};