/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global React, ReactDOM */

ReactDOM.unstable_createRoot(document.getElementById('app')).render(
  React.createElement('h1', null, 'Hello React ', React.version, '!')
);
