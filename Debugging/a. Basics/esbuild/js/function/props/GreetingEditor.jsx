/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import { useState } from 'react';

import Greeting from './Greeting.jsx';
import EditBox from './EditBox.jsx';

function GreetingEditor() {
  const [name, setName] = useState('World');

  return (
    <>
      <EditBox onChange={setName} value={name} />
      <Greeting name={name} />
    </>
  );
}

export default GreetingEditor;
