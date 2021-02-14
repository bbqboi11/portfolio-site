import React from 'react';
import classNames from 'classnames';

import './imageBox.scss';

export const ImageBox = ({ imageSrc, imageAlt, className, children }) => (
  <div className={classNames('image-box', className)}>
    <div className="image-background">
      <img src={imageSrc} alt={imageAlt} />
    </div>
    {children && <div className="children">{children}</div>}
  </div>
);