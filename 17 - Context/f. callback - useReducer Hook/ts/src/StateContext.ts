/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createContext } from 'react';

const StateContext = createContext<{
  state: { color: string };
  dispatch: (action: { type: string }) => void;
}>({
  state: { color: 'red' },
  dispatch: () => {}
});

export default StateContext;
