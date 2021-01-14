import React, { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { NavContext } from './Nav';

export const useNavRegion = (id: string) => {
  id = `#${id}`;
  const { ref, inView } = useInView({
    rootMargin: '-30% -30% -60% -30%',
  });
  const { setHash } = useContext(NavContext);

  useEffect(() => {
    if (
      inView &&
      typeof window !== 'undefined' &&
      window.location.hash !== id
    ) {
      history.pushState(null, null, id);
      setHash(id);
    }
  }, [inView]);

  return ref;
};
