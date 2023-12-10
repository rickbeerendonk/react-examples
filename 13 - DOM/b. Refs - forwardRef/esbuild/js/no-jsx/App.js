/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement, useLayoutEffect, useRef } from 'react';

import Greeting from './Greeting.js';

function App() {
  const myGreeting = useRef();

  useLayoutEffect(() => {
    // myH1.current contains a reference to the real DOM node.
    myGreeting.current.innerHTML = 'Hello <u>React</u>!!!';
  });

  return createElement(Greeting, {
    ref: myGreeting,
    name: 'World'
  });
}

export default App;
