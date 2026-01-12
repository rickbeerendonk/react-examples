/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';

import DynamicComponent from './DynamicComponent.jsx';

import Comp1 from './components/Comp1.jsx';
import Comp3 from './components/Comp3.jsx';

export default function App() {
  const [elem, setElem] = useState(() => Comp1);

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
