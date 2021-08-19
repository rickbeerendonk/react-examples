/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function sleep(delay) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

function Slow({ name }) {
  sleep(250);
  return <div>{name}</div>;
}

export default Slow;
