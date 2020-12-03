/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

const StateContext = React.createContext({
  state: { color: 'orange' },
  dispatch: () => {}
});

export default StateContext;
