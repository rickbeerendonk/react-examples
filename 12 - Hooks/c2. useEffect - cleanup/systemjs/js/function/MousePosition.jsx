/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function MousePosition() {
  const [mousePosition, setMousePosition] = React.useState({
    X: undefined,
    Y: undefined
  });

  React.useEffect(() => {
    // Default: Handler inside
    function handleMouseMove(e) {
      setMousePosition({ X: e.pageX, Y: e.pageY });
    }
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <h1>
      Mouse is at ({mousePosition.X}, {mousePosition.Y})
    </h1>
  );
}

export default MousePosition;
