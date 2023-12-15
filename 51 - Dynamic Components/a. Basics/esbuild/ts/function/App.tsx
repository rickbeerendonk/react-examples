/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import DynamicComponent from './DynamicComponent.tsx';

let production = true;

interface Comp1Props {
  children: React.ReactNode;
}

function Comp1({ children }: Comp1Props) {
  return <h1>{children}</h1>;
}

interface Comp3Props {
  children: React.ReactNode;
}

function Comp3({ children }: Comp3Props) {
  return <h3>{children}</h3>;
}

function App() {
  const elem = production ? Comp3 : Comp1;
  return <DynamicComponent type={elem}>Hello World!</DynamicComponent>;
}

export default App;
