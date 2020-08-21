/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function HelloWorld() {
  const rootRef = React.useRef();

  React.useLayoutEffect(() => {
    console.log('Was handleRef() executed? ', rootRef.current.innerHTML);
  });

  function handleRef(ref) {
    ref.innerHTML = 'Hello <u>React</u>!!!';
  }

  return (
    <div ref={rootRef}>
      <h1 ref={handleRef}>Hello World!</h1>
    </div>
  );
}

export default HelloWorld;
