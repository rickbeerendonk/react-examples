/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createContext } from 'react';

const BackgroundContext = createContext({ color: 'white' });
BackgroundContext.displayName = 'BackgroundContext'; // DevTools

export default BackgroundContext;
