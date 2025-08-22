/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import type { ChangeEvent } from 'react';

export default function App() {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    alert(`Event handled.
Target: ${e.target}
Value: ${e.target.value}
Data: ${e.nativeEvent.data}`);
  }

  return <input onChange={handleChange} value="Hello React!" />;
}
