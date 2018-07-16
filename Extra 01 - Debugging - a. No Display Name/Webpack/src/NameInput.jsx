/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* eslint react/display-name:"off" */
/* eslint react/prop-types:"off" */

import React from 'react';

// Observe in the React DevTools that the component has name "_default",
// just like other components.
// ESLint react/display-name rule prevents these errors.
export default ({ onChange, name }) => (
  <input onChange={onChange} value={name} />
);
