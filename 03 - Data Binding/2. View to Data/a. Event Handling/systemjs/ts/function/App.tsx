/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

const App: React.FC = () => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    alert(`Event handled.
Target: ${e.currentTarget}
Value: ${e.currentTarget.value}
Data: ${e.nativeEvent.data}`);
  }

  return <input onChange={handleChange} value="Hello React!" />;
};

export default App;
