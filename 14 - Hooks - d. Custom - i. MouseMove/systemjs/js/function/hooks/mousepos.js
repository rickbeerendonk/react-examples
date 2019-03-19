/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function useMousePosition() {
  const [mousePosition, setMousePosition] = React.useState({
    X: undefined,
    Y: undefined
  });

  React.useEffect(() => {
    function handleMouseOver(e) {
      setMousePosition({ X: e.pageX, Y: e.pageY });
    }
    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Return current state
  return mousePosition;
}

export default useMousePosition;
