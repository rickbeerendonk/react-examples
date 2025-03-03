/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useState } from 'react';

import EditBox from './EditBox.jsx';
import Greeting from './Greeting.jsx';

function GreetingEditor() {
  const [name, setName] = useState('World');

  function handleChange(newName) {
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
