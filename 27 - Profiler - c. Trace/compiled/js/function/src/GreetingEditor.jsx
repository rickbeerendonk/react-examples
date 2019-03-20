/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import * as Tracing from 'scheduler/tracing';

import EditBox from './EditBox';
import Greeting from './Greeting';

// Inspect the API
//console.log(Tracing);

function GreetingEditor() {
  const [name, setName] = React.useState('World');

  function handleChange(newName) {
    Tracing.unstable_trace('EditBox value change', performance.now(), () => {
      setName(newName);
    });
  }

  return (
    <React.Fragment>
      <EditBox onChange={handleChange} value={name} />
      <Greeting name={name} />
    </React.Fragment>
  );
}

export default GreetingEditor;
