/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off", no-console:"off" */

import React from 'react';

import Child from './Child';

const ChildMemo = React.memo(Child);
ChildMemo.displayName = 'ChildMemo';

export default ChildMemo;
