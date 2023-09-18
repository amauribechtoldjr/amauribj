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

    const { current } = ref;

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [options]);

  return {
    ref,
    className: `${originalClassName} ${
      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-44"
    }`,
  };
}
