/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement, useLayoutEffect, useRef } from 'react';

function HelloWorld() {
  const myH1 = useRef();

  useLayoutEffect(() => {
    // myH1.current contains a reference to the real DOM node.
    myH1.current.innerHTML = 'Hello <u>React</u>!!!';
  });

  return createElement('h1', { ref: myH1 }, 'Hello World!');
}

export default HelloWorld;
