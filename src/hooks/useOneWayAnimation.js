import { useInView } from 'framer-motion';
import { useState, useEffect } from 'react';

export const useOneWayAnimation = (ref, options = {}) => {
  const isInView = useInView(ref, options);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (isInView && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [isInView, hasTriggered]);

  return hasTriggered;
};