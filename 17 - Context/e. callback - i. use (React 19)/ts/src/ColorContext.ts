/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createContext } from 'react';

interface ColorContextType {
  color: string;
  handleSwitch: () => void;
}

const ColorContext = createContext<ColorContextType>({
  color: 'orange',
  handleSwitch: () => {}
});

export default ColorContext;
