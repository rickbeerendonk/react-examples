/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting({ name }) {
  return <h1>Hello {name}!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting name="World" />);
