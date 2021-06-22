/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useState } from 'react';

import EditBox from './EditBox';
import Greeting from './Greeting';

function GreetingEditor() {
  const [name, setName] = useState('World');

  return (
    <>
      <EditBox onChange={setName} name={name} />
      <Greeting name={name} />
    </>
  );
}

export default GreetingEditor;
