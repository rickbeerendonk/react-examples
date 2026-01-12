/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import ColorContext from './ColorContext.ts';
import Bottom from './Bottom.tsx';
import Middle from './Middle.tsx';

interface TopProps {
  color: string;
}

function Top({ color }: TopProps) {
  return (
    <>
      <ColorContext.Provider value={{ color: 'blue' }}>
        <ColorContext.Provider value={{ color }}>
          <Middle />
        </ColorContext.Provider>

        <Bottom />
      </ColorContext.Provider>

      <Bottom />
    </>
  );
}

export default Top;
