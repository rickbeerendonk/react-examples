/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

import MyInput from './MyInput';

function HelloMessage() {
  const [name, setName] = React.useState('World');

  function handleBrowserChanged(e) {
    alert(e.target.value);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default HelloMessage;
