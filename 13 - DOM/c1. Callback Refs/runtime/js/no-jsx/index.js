/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

function HelloWorld() {
  return React.createElement(
    'h1',
    { ref: ref => (ref.innerHTML = 'Hello <u>React</u>!!!') },
    'Hello World!'
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(HelloWorld));
