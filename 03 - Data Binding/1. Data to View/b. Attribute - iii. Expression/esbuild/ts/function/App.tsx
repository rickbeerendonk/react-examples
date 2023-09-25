/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

const App = () => {
  return (
    <input type="date" value={new Date().toISOString().substring(0, 10)} />
  );
};

export default App;
