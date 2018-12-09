/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

function HelloWorld() {
  const myH1 = React.useRef(null);

  React.useLayoutEffect(() => {
    // myH1.current contains a reference to the real DOM node.
    myH1.current.innerHTML = 'Hello <i>React</i>!!!';
  });

  return React.createElement('h1', { ref: myH1 }, 'Hello World!');
}

ReactDOM.render(
  React.createElement(HelloWorld),
  document.getElementById('app')
);
