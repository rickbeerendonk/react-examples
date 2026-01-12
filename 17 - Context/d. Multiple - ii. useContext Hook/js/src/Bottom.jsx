/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useContext } from 'react';

import BackgroundContext from './BackgroundContext.js';
import ColorContext from './ColorContext.js';

function Bottom() {
  const ctxBackground = useContext(BackgroundContext);
  const ctxColor = useContext(ColorContext);

  return (
    <h1 style={{ background: ctxBackground.color, color: ctxColor.color }}>
      Bottom
    </h1>
  );
}

export default Bottom;
