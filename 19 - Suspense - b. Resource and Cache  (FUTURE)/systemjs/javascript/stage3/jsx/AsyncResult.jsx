/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import AsyncResource from './AsyncResource';
import cache from './cache';

let AsyncResult = ({ id }) => {
  let result = AsyncResource.read(cache, id);
  return <h1>{result}</h1>;
};

export default AsyncResult;
