/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

const Child = React.forwardRef(function(props, ref) {
  const myH1 = React.useRef();

  React.useImperativeHandle(ref, () => ({
    addText: newText => {
      // myChild.current contains a reference to the real DOM node.
      myH1.current.innerHTML += ' - ' + newText;
    }
  }));

  return (
    <div>
      <h1 ref={myH1}>Name: {props.name}</h1>
    </div>
  );
});
Child.displayName = 'Child';

export default Child;
