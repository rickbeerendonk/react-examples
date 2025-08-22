/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createContext } from 'react';

const ColorContext = createContext<{
  color: string;
}>({ color: 'orange' });
ColorContext.displayName = 'ColorContext';

export default ColorContext;
