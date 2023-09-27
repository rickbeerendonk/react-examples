/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

const App = () => {
  const names = new Set(['A', 'B', 'C']);

  return (
    <>
      <h1>List</h1>
      <ul>
        {Array.from(names, name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
