/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import EditBox from './EditBox';
import Greeting from './Greeting';

function GreetingEditor() {
  const [name, setName] = React.useState('World');

  return (
    <React.Fragment>
      <EditBox onChange={setName} value={name} />
      <Greeting name={name} />
    </React.Fragment>
  );
}

export default GreetingEditor;
