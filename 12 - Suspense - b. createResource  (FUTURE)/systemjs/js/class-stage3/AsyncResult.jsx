/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import AsyncResource from './AsyncResource';

function AsyncResult({ id }) {
  let result = AsyncResource.read(id);
  return <h1>{result}</h1>;
}

export default AsyncResult;
