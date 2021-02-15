import React from 'react';

import './video.scss';

export const Video = React.memo(({ url, src, title, style = {}, width, height, controls = true, type = 'video/mp4', muted = false, loop = false, autoPlay = false }) => {
  if (src) {
    return (
      <video className="video" style={style} controls={controls} muted={muted} loop={loop} autoPlay={autoPlay}>
        <source src={src} type={type} />
      </video>
    );
  } else if (url) {
    return (
      <div className="video" style={style}>
        <iframe
          src={url}
          title={title}
          width={width}
          height={height}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          loop={loop}
          muted={muted}
          autoPlay={autoPlay}
        />
      </div>
    );
  }
});