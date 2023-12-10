/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createContext } from 'react';

const StateContext = createContext({
  state: {},
  dispatch: () => {}
});

export default StateContext;
