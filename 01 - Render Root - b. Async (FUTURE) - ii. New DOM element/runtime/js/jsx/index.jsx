/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global React, ReactDOM */

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.createRoot(app).render(<h1>Hello React {React.version}!</h1>);
