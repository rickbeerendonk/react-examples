/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import React from 'react';
import Greeting from './Greeting';
import EditBox from './EditBox';

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
