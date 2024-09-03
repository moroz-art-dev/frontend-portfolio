import {useEffect, useState} from 'react';

export const useRotatingIndex = (length: number, interval: number) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (length > 0) {
      const timer = setInterval(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [length, interval]);

  return activeIndex;
};
