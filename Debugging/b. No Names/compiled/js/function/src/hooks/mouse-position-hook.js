/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { /*useDebugValue,*/ useEffect, useState } from 'react';

export default function () {
  const [mousePosition, setMousePosition] = useState({
    x: undefined,
    y: undefined
  });

  useEffect(() => {
    function handleMouseOver(e) {
      setMousePosition({ x: e.pageX, y: e.pageY });
    }
    document.addEventListener('mousemove', handleMouseOver);
    return () => {
      document.removeEventListener('mousemove', handleMouseOver);
    };
  }, []);

  // No debug value
  //useDebugValue(null, () => 'No value');

  return mousePosition;
}
