/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { coordination, useMousePosition } from './hooks/mousepos.js';

function GreetingEditor() {
  const mousePosition = useMousePosition(coordination.screen);

  return (
    <h1>
      Mouse Position:&nbsp;
      {mousePosition.x !== undefined && (
        <span>
          ({mousePosition.x}, {mousePosition.y})
        </span>
      )}
    </h1>
  );
}

export default GreetingEditor;
