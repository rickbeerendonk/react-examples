/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Greeting({ name }) {
  return (
    <React.Fragment>
      <h3>Greeting:</h3>
      {
        // Only render when a not-name is falsy:
        !name || <div>Hello {name}!</div>
      }
    </React.Fragment>
  );
}

ReactDOM.render(
  <React.Fragment>
    <Greeting name="Alexandra" />
    <Greeting />
    <Greeting name="Benjamin" />
  </React.Fragment>,
  document.getElementById('app')
);
