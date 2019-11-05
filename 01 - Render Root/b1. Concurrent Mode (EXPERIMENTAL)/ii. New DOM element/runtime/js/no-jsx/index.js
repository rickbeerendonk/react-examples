/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.createRoot(app).render(
  React.createElement('h1', null, 'Hello React ', React.version, '!')
);
