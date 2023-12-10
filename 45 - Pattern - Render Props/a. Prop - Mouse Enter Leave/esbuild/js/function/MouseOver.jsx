/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useState } from 'react';

// Component with render prop
function MouseOver({ render }) {
  const [mouseIsOver, setMouseIsOver] = useState(false);

  function handleMouseEnter() {
    setMouseIsOver(true);
  }

  function handleMouseLeave() {
    setMouseIsOver(false);
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/*
        Call the props.render function with what this component knows about the mouse:
      */}
      {render(mouseIsOver)}
    </div>
  );
}

export default MouseOver;
