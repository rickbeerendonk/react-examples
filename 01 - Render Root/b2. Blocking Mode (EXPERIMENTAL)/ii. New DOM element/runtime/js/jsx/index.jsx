/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global React, ReactDOM */

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.unstable_createBlockingRoot(app).render(
  <h1>Hello React {React.version}!</h1>
);
