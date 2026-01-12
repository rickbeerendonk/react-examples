/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { lazy } from 'react';

const Greeting = lazy(
  () =>
    new Promise(resolve =>
      setTimeout(() => resolve({ default: () => <p>Greeting!</p> }), 1000)
    )
);

export default Greeting;
