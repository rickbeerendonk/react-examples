/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

// Component with render prop
function MouseOver({ render }) {
  const [mouseIsOver, setMouseIsOver] = React.useState(false);

  function onMouseEnter() {
    setMouseIsOver(true);
  }

  function onMouseLeave() {
    setMouseIsOver(false);
  }

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {/*
        Call the props.render function with what this component knows about the mouse
        (this.state can be removed if state contains more than 1 property):
      */}
      {render(mouseIsOver)}
    </div>
  );
}

export default MouseOver;
