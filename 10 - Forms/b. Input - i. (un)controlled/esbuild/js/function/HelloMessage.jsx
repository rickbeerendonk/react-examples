/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useState } from 'react';

function HelloMessage() {
  const [name, setName] = useState('World');

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <div>
        Not controlled by React:
        <input autoFocus onChange={handleChange} defaultValue={name} />
      </div>
      <div>
        Controlled by React:
        <input onChange={handleChange} value={name} />
      </div>
      <div style={{ color: 'darkgray' }}>State = {name}</div>
    </>
  );
}

export default HelloMessage;
