/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import AsyncResource from './AsyncResource';

function AsyncResult({ id }) {
  let result = AsyncResource.read(id);
  return <h1>{result}</h1>;
}

export default AsyncResult;
