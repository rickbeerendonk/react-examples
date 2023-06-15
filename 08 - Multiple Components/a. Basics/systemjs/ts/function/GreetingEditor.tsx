/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import EditBox from './EditBox';
import Greeting from './Greeting';

function GreetingEditor() {
  const [name, setName] = React.useState('World');

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
