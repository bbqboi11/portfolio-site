import { useEffect, useRef, useState } from "react";

export default (
  ref,
  {
    root = null,
    rootMargin = "0px 0px 0px 0px",
    threshold = 0
  }
) => {
  const [entry, updateEntry] = useState({});
  const observer = useRef(
    new window.IntersectionObserver(
      ([intersectionEntry]) => updateEntry(intersectionEntry),
      {
        root,
        rootMargin,
        threshold
      }
    )
  );

  const unObserve = () => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();
  };

  useEffect(() => {

    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (ref.current) currentObserver.observe(ref.current);

    return () => currentObserver.disconnect();
  }, [ref.current]);

  return [entry, unObserve];
};