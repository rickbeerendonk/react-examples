/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function GreetingEditor(): JSX.Element {
  const [name, setName]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = React.useState('World');

  const [other, setOther]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = React.useState('More state');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
      <h2>{other}</h2>
    </React.Fragment>
  );
}

export default GreetingEditor;
