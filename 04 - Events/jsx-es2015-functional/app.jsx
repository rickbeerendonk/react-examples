/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

const Greeting = () => (
  <input onChange={e => alert(`Event handled.
Target: ${e.target}
Value: ${e.target.value}`)} value='Hello World!' />
);

ReactDOM.render(
  <Greeting />,
  document.getElementById('app')
);