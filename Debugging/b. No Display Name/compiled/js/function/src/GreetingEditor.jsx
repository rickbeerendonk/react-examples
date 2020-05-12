/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* eslint react/display-name:"off" */

import React from 'react';
import Greeting from './Greeting';
import EditBox from './EditBox';

export default function() {
  const [name, setName] = React.useState('World');

  return (
    <React.Fragment>
      <EditBox onChange={setName} value={name} />
      <Greeting name={name} />
    </React.Fragment>
  );
}
