/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<{
    x?: number;
    y?: number;
  }>({
    x: undefined,
    y: undefined
  });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setMousePosition({ x: e.pageX, y: e.pageY });
    }
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Return current state
  return mousePosition;
}

export default useMousePosition;
