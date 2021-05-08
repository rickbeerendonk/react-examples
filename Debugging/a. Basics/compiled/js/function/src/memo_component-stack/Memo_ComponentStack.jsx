/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import React from 'react';

function Memo_ComponentStack() {
  console.log('[log] Component stack not visible!');
  console.warn('[warn] Component stack:');
  console.error('[error] Component stack:');

  return (
    <>
      <p>See Memo badge in DevTools.</p>
      <p>See log for component stacks.</p>
    </>
  );
}

export default React.memo(Memo_ComponentStack);
