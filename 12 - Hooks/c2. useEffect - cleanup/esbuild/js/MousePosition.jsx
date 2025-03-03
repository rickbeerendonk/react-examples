/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';

function MousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: undefined,
    y: undefined
  });

  useEffect(() => {
    // Default: Handler inside
    function handleMouseMove(e) {
      setMousePosition({ x: e.pageX, y: e.pageY });
    }
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      console.log('Cleanup Effect MousePosition');
    };
  }, []);

  return (
    <h1>
      Mouse is at ({mousePosition.x}, {mousePosition.y})
    </h1>
  );
}

export default MousePosition;
