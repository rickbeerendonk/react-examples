/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useState } from 'react';

import EditBox from './EditBox.tsx';
import Greeting from './Greeting.tsx';

function GreetingEditor() {
  const [name, setName] = useState('World');

  function handleChange(newName: string) {
    setName(newName);
  }

  return (
    <>
      <EditBox onChange={handleChange} value={name} />
      <Greeting name={name} />
    </>
  );
}

export default GreetingEditor;
