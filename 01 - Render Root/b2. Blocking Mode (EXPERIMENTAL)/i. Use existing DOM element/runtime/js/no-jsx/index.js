/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global React, ReactDOM */

ReactDOM.unstable_createBlockingRoot(document.getElementById('app')).render(
  React.createElement('h1', null, 'Hello React ', React.version, '!')
);
