/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useDebugValue, useEffect, useState } from 'react';

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    X: undefined,
    Y: undefined
  });

  useEffect(() => {
    function handleMouseOver(e) {
      setMousePosition({ X: e.pageX, Y: e.pageY });
    }
    document.addEventListener('mousemove', handleMouseOver);
    return () => {
      document.removeEventListener('mousemove', handleMouseOver);
    };
  }, []);

  useDebugValue(mousePosition, mp => `(${mp.X}, ${mp.Y})`);

  return mousePosition;
}
