/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { forwardRef, useImperativeHandle, useRef } from 'react';

const Child = forwardRef(function (props, ref) {
  const myH1 = useRef();

  useImperativeHandle(ref, () => myH1.current);

  return (
    <div>
      <h1 ref={myH1}>Name: {props.name}</h1>
    </div>
  );
});
Child.displayName = 'Child';

export default Child;
