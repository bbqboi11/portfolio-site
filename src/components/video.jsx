import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

import './video.scss';

export const Video = React.memo(({ url, src, title, style = {}, width, height, controls = true, type = 'video/mp4', muted = false, loop = false, autoPlay = false }) => {
  const ref = React.useRef(null);
  const [entry] = useIntersectionObserver(ref, { threshold: 0.8 });

  React.useEffect(() => {
    if (ref.current && autoPlay) {
      if (entry.isIntersecting && ref.current.paused) {
        ref.current.muted = true;
        ref.current.play();
      } else if (!entry.isIntersecting && !ref.current.paused) {
        ref.current.pause();
      }
    }
  });

  if (src) {
    return (
      <video className="video" ref={ref} style={style} controls={controls} muted={muted} loop={loop}>
        <source src={src} type={type} />
      </video>
    );
  } else if (url) {
    return (
      <iframe
        src={url}
        title={title}
        width={width}
        height={height}
        className="video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        loop={loop}
        muted={muted}
      />
    );
  }
});