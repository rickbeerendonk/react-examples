/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createContext } from 'react';

interface ColorContextIntf {
  color: string;
}

const ColorContext = createContext<ColorContextIntf>({ color: 'orange' });
ColorContext.displayName = 'ColorContext';

export default ColorContext;
