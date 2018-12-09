/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

// Component with render prop
function MouseOver({ children }) {
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
        Call the props.children function with what this component knows about the mouse:
      */}
      {children(mouseIsOver)}
    </div>
  );
}

export default MouseOver;
