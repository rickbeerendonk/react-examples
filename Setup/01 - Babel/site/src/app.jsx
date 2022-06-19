/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting() {
  return <h1>Hello World!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
