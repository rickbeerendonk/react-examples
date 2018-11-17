/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import Greeting from './Greeting';

function App() {
  const myGreeting = React.useRef(null);

  React.useLayoutEffect(() => {
    // myH1.current contains a reference to the real DOM node.
    myGreeting.current.innerHTML = 'Hello <i>React</i>!!!';
  });

  return React.createElement(Greeting, {
    ref: myGreeting,
    name: 'World'
  });
}

export default App;
