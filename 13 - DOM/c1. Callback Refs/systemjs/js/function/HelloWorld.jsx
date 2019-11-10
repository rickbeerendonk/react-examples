/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function HelloWorld() {
  return (
    <h1 ref={ref => (ref.innerHTML = 'Hello <u>React</u>!!!')}>Hello World!</h1>
  );
}

export default HelloWorld;
