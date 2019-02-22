/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

export default function useMousePosition() {
  // Hidden state variable
  const [mousePosition, setMousePosition] = React.useState({
    X: undefined,
    Y: undefined
  });

  // Function to change state
  function handleMouseOver(e) {
    setMousePosition({ X: e.pageX, Y: e.pageY });
  }
  React.useEffect(() => {
    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [handleMouseOver]);

  // Return current state
  return mousePosition;
}
