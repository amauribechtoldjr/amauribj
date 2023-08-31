import { useEffect, useRef, useState } from "react";

const _options = {
  threshold: 0.4,
};

interface UserTransitionEffect {
  originalClassName: string;
  options?: IntersectionObserverInit;
}

export default function useTransitionEffect({
  originalClassName,
  options = _options,
}: UserTransitionEffect) {
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
    ref,
    className: `${originalClassName} ${
      isVisible ? "oldtransitionVisible" : "oldtransitionHide"
    }`,
  };
}
