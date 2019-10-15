/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import Hover from 'react-interactions/hover';

// Workaround for not being able to do "import { ... } from..."
const useState = React.useState;
const useHover = Hover.useHover;

function Greeting() {
  const [isHovered, setHovered] = useState(false);
  const hoverListener = useHover({
    onHoverChange: setHovered
  });

  return (
    <React.Fragment>
      <h1
        listeners={hoverListener}
        style={{ color: isHovered ? 'red' : undefined }}
      >
        Hallo Norway
      </h1>
      <h1>Hej Denmark</h1>
    </React.Fragment>
  );
}

export default Greeting;
