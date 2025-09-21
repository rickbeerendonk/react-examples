/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';

import DynamicComponent from './DynamicComponent.tsx';

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

export default function App() {
  const [elem, setElem] = useState<React.ElementType>(() => Comp1);

  useEffect(
    function changeElem() {
      const id = setTimeout(() => {
        setElem(prev => (prev === Comp1 ? 'h2' : Comp3));
      }, 2000);
      return () => clearTimeout(id);
    },
    [elem]
  );

  return <DynamicComponent as={elem}>Hello World!</DynamicComponent>;
}
