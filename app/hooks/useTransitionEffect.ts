import { useEffect, useRef, useState } from "react";

const options = {
  threshold: 0.6,
};

export default function useTransitionEffect() {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef(null);

  const cb = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(cb, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return {
    isVisible,
    ref,
  };
}
