/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { use, useState } from 'react';

import ColorContext from './ColorContext.js';

function Bottom() {
  const [show, setShow] = useState(true);

  let color = 'black';
  if (show) {
    // React 19+: use API -- No if/loop/function restrictions like hooks
    const colorContext = use(ColorContext);
    color = colorContext.color;
  }

  return (
    <>
      <button onClick={() => setShow(s => !s)}>
        {show ? 'Hide context' : 'Show context'}
      </button>
      <h1 style={{ color }}>Bottom</h1>
    </>
  );
}

export default Bottom;
