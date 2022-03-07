/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';

let production = true;

function Comp1({ children }) {
  return <h1>{children}</h1>;
}

function Comp3({ children }) {
  return <h3>{children}</h3>;
}

function App() {
  const Elem = production ? Comp3 : Comp1;
  const props = { children: 'Hello World!' };
  return <Elem {...props} />;
}

export default App;
