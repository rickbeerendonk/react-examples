/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createContext } from 'react';

const ColorContext = createContext({
  color: 'black',
  handleSwitch: () => {}
});

export default ColorContext;
