/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function removeDuplicates(s) {
  return s
    .split('')
    .reduce(
      (acc, cur) => (acc && acc[acc.length - 1] === cur ? acc : acc + cur),
      ''
    );
}

function GreetingEditor() {
  const [name, setName] = React.useState('World');

  /* eslint no-console:"off" */
  console.log('render(): ', name);

  function handleChange(e) {
    console.log('event');
    setName(removeDuplicates(e.target.value));
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
    </React.Fragment>
  );
}

export default GreetingEditor;
