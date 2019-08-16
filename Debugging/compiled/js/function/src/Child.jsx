/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import React from 'react';

function Child({ info }) {
  console.warn('Do you see a component stack?');

  return (
    <>
      <h3>Child: The parent is not the owner.</h3>
      <p>The owner is responsible for properties and (re)renders.</p>
      <p>Property info: {info}</p>
    </>
  );
}

export default Child;
