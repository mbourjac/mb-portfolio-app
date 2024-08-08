import { useState, useEffect, useRef, useCallback } from 'react';
import type { Picture } from '../../features/collection/collection.types';

interface CollectionSlidesProps {
  pictures: Picture[];
  delay?: number;
}

export const CollectionSlides = ({
  pictures,
  delay = 300,
}: CollectionSlidesProps) => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  const startSlideshow = useCallback(() => {
    if (intervalIdRef.current) return; // Prevent multiple intervals

    intervalIdRef.current = setInterval(() => {
      setCurrentPictureIndex((prevIndex) =>
        prevIndex === pictures.length - 1 ? 0 : prevIndex + 1,
      );
    }, delay);
  }, [pictures, delay]);

  const stopSlideshow = () => {
    if (!intervalIdRef.current) return;

    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  };

  useEffect(() => {
    startSlideshow();

    return () => {
      stopSlideshow();
    };
  }, [pictures, delay, startSlideshow]);

  return (
    <div onMouseEnter={stopSlideshow} onMouseLeave={startSlideshow}>
      <img src={pictures[currentPictureIndex]!.path} alt="" />
    </div>
  );
};
