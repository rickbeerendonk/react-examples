/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

import ColorContext from './ColorContext.ts';
import Middle from './Middle.tsx';

interface TopProps {
  color: string;
}

function Top(props: TopProps) {
  const [color, setColor] = useState(props.color);

  function handleSwitch() {
    setColor(c => (c === 'red' ? 'blue' : 'red'));
  }

  return (
    <ColorContext value={{ color, handleSwitch }}>
      <Middle />
    </ColorContext>
  );
}

export default Top;
