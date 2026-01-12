/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { jsx } from 'react/jsx-runtime';

let production = true;

function Comp1({ children }) {
  return <h1>{children}</h1>;
}

function Comp3({ children }) {
  return <h3>{children}</h3>;
}

export default function App() {
  const Elem1 = production ? 'h4' : 'h2';
  const props1 = { children: 'Hello HTML Element!' };
  const Elem2 = production ? Comp3 : Comp1;
  const props2 = { children: 'Hello React Component!' };
  return (
    <>
      <Elem1 {...props1} />
      <Elem2 {...props2} />
    </>
  );
}
