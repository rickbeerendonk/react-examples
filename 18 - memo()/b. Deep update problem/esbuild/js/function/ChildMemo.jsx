/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", no-console:"off" */

import { memo } from 'react';

import Child from './Child.jsx';

const ChildMemo = memo(Child);

export default ChildMemo;
