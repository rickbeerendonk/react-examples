/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function GreetingEditor({ languages }) {
  const [name, setName] = React.useState('World');

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input autoFocus onChange={handleChange} value={name} />
      {languages.includes('dk') && name && <h1>DK: Hej {name}!</h1>}
      {languages.includes('en') && name && <h1>EN: Hello {name}!</h1>}
      {languages.includes('nl') && name && <h1>NL: Hallo {name}!</h1>}
      {languages.includes('no') && name && <h1>NO: Hallo {name}!</h1>}
    </>
  );
}

export default GreetingEditor;
