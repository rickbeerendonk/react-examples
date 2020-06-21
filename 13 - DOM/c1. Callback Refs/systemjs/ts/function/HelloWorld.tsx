/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

const HelloWorld: React.FC<> = () => {
  function handleRef(ref) {
    ref.innerHTML = 'Hello <u>React</u>!!!';
  }

  return <h1 ref={handleRef}>Hello World!</h1>;
};

export default HelloWorld;
