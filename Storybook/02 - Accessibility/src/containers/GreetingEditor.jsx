/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import React, { useState } from 'react';

import EditBox from '../components/EditBox';
import Greeting from '../components/Greeting';

export function GreetingEditor() {
  const [name, setName] = useState('World');

  return (
    <>
      <EditBox onChange={setName} value={name} />
      <Greeting name={name} />
    </>
  );
}

export default GreetingEditor;
