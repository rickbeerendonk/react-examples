/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global React, ReactDOM */

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(
  React.createElement('h1', null, 'Hello React ', React.version, '!'),
  app
);
