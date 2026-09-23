/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';

export enum coordination {
  client,
  page,
  screen,
  offset
}

export function useMousePosition(coord: coordination = coordination.client) {
  const [mousePosition, setMousePosition] = useState<{
    x: number | undefined;
    y: number | undefined;
  }>({
    x: undefined,
    y: undefined
  });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      switch (coord) {
        case coordination.client:
          setMousePosition({ x: e.clientX, y: e.clientY });
          break;
        case coordination.page:
          setMousePosition({ x: e.pageX, y: e.pageY });
          break;
        case coordination.screen:
          setMousePosition({ x: e.screenX, y: e.screenY });
          break;
        case coordination.offset:
          setMousePosition({ x: e.offsetX, y: e.offsetY });
          break;
      }
    }
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [coord]);

  // Return current state
  return mousePosition;
}
