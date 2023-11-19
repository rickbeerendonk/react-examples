/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import Child from './Child.jsx';

function Parent() {
  const [name, setName] = React.useState('');

  function nameChanged(e) {
    setName(e.target.value);
  }

  return (
    <>
      <h1>Parent</h1>
      <div style={{ color: 'darkgray' }}>
        Open the console and observe the number of Child renders when typing.
      </div>
      <div>
        <input autoFocus onChange={nameChanged} value={name} />
      </div>
      <Child />
    </>
  );
}

export default Parent;
