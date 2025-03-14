import { useState, useEffect, useRef } from 'react';

function useInputWidth() {
  const elementRef = useRef(null);
  const [elementWidth, setElementWidth] = useState('auto');

  const updateWidth = () => {
    if (elementRef.current) {
      setElementWidth(`${elementRef.current.getBoundingClientRect().width}px`);
    }
  };

  useEffect(() => {
    updateWidth();
  }, [elementRef.current]);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return { elementRef, elementWidth };
}

export default useInputWidth;
