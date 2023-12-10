/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { forwardRef, useRef, useImperativeHandle } from 'react';

const Child = forwardRef(function (props, ref) {
  const myH1 = useRef();

  useImperativeHandle(ref, () => ({
    addText: newText => {
      // myH1.current contains a reference to the real DOM node.
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
