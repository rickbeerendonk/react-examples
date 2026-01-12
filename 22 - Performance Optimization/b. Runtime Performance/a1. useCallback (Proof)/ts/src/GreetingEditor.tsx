/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React, { useCallback, useState } from 'react';
import type { ChangeEvent } from 'react';

const handlers = new Set();

function GreetingEditor() {
  const [name, setName] = useState('World');

  const changeHandler = function (e: ChangeEvent<HTMLInputElement>) {
    setName((e.target as HTMLInputElement).value);
  };

  // const changeHandler = useCallback(
  //   function (e: ChangeEvent<HTMLInputElement>) {
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
