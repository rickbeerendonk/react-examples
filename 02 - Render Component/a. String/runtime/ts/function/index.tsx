/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting() {
  return 'Hello World!';
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
