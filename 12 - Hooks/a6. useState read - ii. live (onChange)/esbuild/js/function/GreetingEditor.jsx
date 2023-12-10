/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useRef, useState } from 'react';

function GreetingEditor() {
  const [name, setName] = useState('World');
  const liveName = useRef();
  liveName.current = name;

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleClick() {
    setTimeout(() => alert(liveName.current), 3000);
  }

  return (
    <>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
      <button onClick={handleClick}>Show name</button>
    </>
  );
}

export default GreetingEditor;
