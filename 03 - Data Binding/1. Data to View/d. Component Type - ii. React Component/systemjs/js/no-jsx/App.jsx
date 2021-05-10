/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

let production = true;

function Comp1({ children }) {
  return <h1>{children}</h1>;
}

function Comp3({ children }) {
  return <h3>{children}</h3>;
}

function App() {
  const elem = production ? Comp3 : Comp1;
  return React.createElement(elem, undefined, 'Hello World!');
}

export default App;
