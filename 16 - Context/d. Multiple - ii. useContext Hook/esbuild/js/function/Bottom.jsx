/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useContext } from 'react';

import BackgroundContext from './BackgroundContext.jsx';
import ColorContext from './ColorContext.jsx';

function Bottom() {
  const { color: background } = useContext(BackgroundContext);
  const { color } = useContext(ColorContext);

  return <h1 style={{ background, color }}>Bottom</h1>;
}

export default Bottom;
