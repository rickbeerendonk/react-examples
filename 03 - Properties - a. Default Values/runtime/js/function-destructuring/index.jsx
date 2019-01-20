/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting({ name = 'World' }) {
  return <h1>Hello {name}!</h1>;
}

ReactDOM.render(<Greeting />, document.getElementById('app'));
