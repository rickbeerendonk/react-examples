/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

const BackgroundContext = React.createContext({ color: 'white' });
BackgroundContext.displayName = 'BackgroundContext'; // DevTools

export default BackgroundContext;
