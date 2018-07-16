/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

const Greeting = () => (
  <h1
    style={{
      transform: 'rotate(10deg)',
      msTransform: 'rotate(10deg)',
      WebkitTransform: 'rotate(10deg)'
    }}
  >
    Hello World!
  </h1>
);

ReactDOM.render(<Greeting />, document.getElementById('app'));
