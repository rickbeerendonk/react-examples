/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", no-console:"off" */

import React from 'react';

function Child() {
  console.log('Render Child');
  return <h2>Child</h2>;
}

const ChildMemo = React.memo(Child /* no custom comparison (2nd parameter) */);
ChildMemo.displayName = 'ChildMemo';

export default ChildMemo;
