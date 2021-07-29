import { Box } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

import useIntersectionObserver from 'utils/useIntersectionObserver';

const Section = ({ id, children, minHeight }) => {
  const threshold = 0.4;
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, { threshold });
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (entry && isVisible) {
      let hashId = `#${entry.target.id}`;
      if (entry.target.id) {
        if (window.location.hash !== hashId) {
          window.history.pushState({}, document.title, hashId);
        }
      } else {
        window.history.pushState({}, document.title, window.location.pathname);
      }
    }
    return () => {};
  }, [isVisible, entry]);

  return (
    <Box id={id} as="section" minHeight={minHeight || "100vh"} {...{ ref }}>
      {children}
    </Box>
  );
};

export default Section;
