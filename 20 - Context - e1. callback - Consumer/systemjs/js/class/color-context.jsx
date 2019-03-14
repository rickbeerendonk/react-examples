/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

const ColorContext = React.createContext({
  color: 'black',
  handleSwitch: () => {}
});

export default ColorContext;
