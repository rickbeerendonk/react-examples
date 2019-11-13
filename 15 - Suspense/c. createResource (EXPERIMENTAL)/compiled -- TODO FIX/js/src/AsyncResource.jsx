/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import * as ReactCache from 'react-cache';

const AsyncResource = ReactCache.unstable_createResource(
  id =>
    new Promise(resolve => {
      setTimeout(() => resolve(`Result ${id}!`), 3000);
    })
);

export default AsyncResource;
