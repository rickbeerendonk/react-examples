/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

import React from './react.development.mjs';
import ReactDOM from './react-dom.development.mjs';

ReactDOM.unstable_createRoot(document.getElementById('app')).render(
  React.createElement('h1', null, 'Hello React', React.version, '!')
);
