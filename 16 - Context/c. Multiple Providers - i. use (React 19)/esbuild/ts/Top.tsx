/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import ColorContext from './ColorContext.ts';
import Middle from './Middle.tsx';
import Bottom from './Bottom.tsx';

function Top({ color }) {
  return (
    <>
      <ColorContext value={{ color: 'blue' }}>
        <ColorContext value={{ color }}>
          <Middle />
        </ColorContext>

        <Bottom />
      </ColorContext>

      <Bottom />
    </>
  );
}

export default Top;
