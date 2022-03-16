/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { /*useDebugValue,*/ useEffect, useState } from 'react';

export default function () {
  const [mousePosition, setMousePosition] = useState({
    x: undefined,
    y: undefined
  });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.pageX, y: e.pageY });
    }
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // No debug value
  //useDebugValue(null, () => 'No value');

  return mousePosition;
}
