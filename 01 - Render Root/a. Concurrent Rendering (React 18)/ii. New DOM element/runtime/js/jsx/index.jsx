/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

const rootElem = document.createElement('div');
document.body.appendChild(rootElem);

const root = ReactDOM.createRoot(rootElem);
root.render(<h1>Hello React {React.version}!</h1>);
