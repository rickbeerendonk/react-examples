/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function HelloMessage() {
  const [name, setName] = React.useState('World');

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <div>
        Not controlled by React:
        <input autoFocus onChange={handleChange} defaultValue={name} />
      </div>
      <div>
        Controlled by React:
        <input onChange={handleChange} value={name} />
      </div>
      <div style={{ color: 'darkgray' }}>State = {name}</div>
    </React.Fragment>
  );
}

export default HelloMessage;
