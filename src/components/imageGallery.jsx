import React from 'react';
import classNames from 'classnames';

import './imageGallery.scss';

export const ImageGallery = ({ children, className, direction }) => (
  <div className={classNames('image-gallery', className, direction)}>{ children }</div>
)