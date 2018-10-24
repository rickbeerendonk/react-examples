/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off", no-console:"off" */

import React from 'react';

import Greeting from './Greeting';

export default function Child(props) {
  return (
    <h2>
      <span>Child: </span>
      <Greeting name={props.obj.name} />
    </h2>
  );
}
