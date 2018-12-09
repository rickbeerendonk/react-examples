/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

function HelloWorld() {
  return React.createElement(
    'h1',
    { ref: ref => (ref.innerHTML = 'Hello <i>React</i>!!!') },
    'Hello World!'
  );
}

ReactDOM.render(
  React.createElement(HelloWorld),
  document.getElementById('app')
);
