/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

const handlers = new Set();

function GreetingEditor() {
  const [name, setName] = useState('World');

  const changeHandler = function (e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  };

  // const changeHandler = React.useCallback(
  //   function (e: React.ChangeEvent<HTMLInputElement>) {
  //     setName(e.target.value);
  //   },
  //   []
  // );

  // Add handler to the set
  handlers.add(changeHandler);

  return (
    <>
      <input onChange={changeHandler} value={name} />
      <h1>Hello {name}!</h1>
      <div>Number of handlers used: {handlers.size}</div>
    </>
  );
}

export default GreetingEditor;
