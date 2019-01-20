/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function GreetingEditor(): JSX.Element {
  const [name, setName]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = React.useState('World');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} />
      {// Only render when a name is truthy:
      name && <h1>Hello {name}!</h1>}
    </React.Fragment>
  );
}

export default GreetingEditor;
