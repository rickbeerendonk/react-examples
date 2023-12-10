/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useState } from 'react';

import MyInput from './MyInput.jsx';

function HelloMessage() {
  const [name, setName] = useState('World');

  function handleBrowserChanged(e) {
    alert(e.target.value);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <div>
        Not controlled by React:
        <MyInput
          autoFocus
          onChange={handleChange}
          onBrowserChanged={handleBrowserChanged}
          defaultValue={name}
        />
      </div>

      <div>
        Controlled by React:
        <MyInput
          onChange={handleChange}
          onBrowserChanged={handleBrowserChanged}
          value={name}
        />
      </div>
    </>
  );
}

export default HelloMessage;
