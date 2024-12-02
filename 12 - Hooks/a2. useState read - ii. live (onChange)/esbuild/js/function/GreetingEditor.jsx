/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useEffect, useState, useRef } from 'react';

// Render 1: name = 'World'
// Render 1: handleClick()
// Render 2: name = 'React'
// Render 1: [After 3s] alert 'React'

function GreetingEditor() {
  const [name, setName] = useState('World');

  const liveName = useRef();

  useEffect(() => {
    liveName.current = name;
  }, [name]);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleClick() {
    setTimeout(() => alert(liveName.current), 3000);
  }

  return (
    <>
      <input onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
      <button onClick={handleClick}>Show name</button>
    </>
  );
}

export default GreetingEditor;
