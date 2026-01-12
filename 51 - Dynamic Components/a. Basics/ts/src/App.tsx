/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';

import DynamicComponent from './DynamicComponent.tsx';

import Comp1 from './components/Comp1.tsx';
import Comp3 from './components/Comp3.tsx';

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
