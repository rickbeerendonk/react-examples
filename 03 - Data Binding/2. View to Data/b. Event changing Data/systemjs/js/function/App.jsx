/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

function App() {
  // Use "useState()" instead of "let"
  // Why? React needs to know something has change
  // Here:
  // - name is a const, the value of this render
  // - setName is called with a new value, React will rerender the component
  // - 'React' is the initial value for the 1st render
  const [name, setName] = React.useState('React');

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
    </>
  );
}

export default App;
