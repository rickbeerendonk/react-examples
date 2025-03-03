/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useRef } from 'react';

/* eslint react-compiler/react-compiler: off */

// Render 1: name = 'World'
// Render 1: handleClick()
// Render 2: name = 'React'
// Render 1: [After 3s] alert 'React'

function GreetingEditor() {
  const name = useRef('World');

  function handleChange(e) {
    name.current = e.target.value;
  }

  function handleClick() {
    setTimeout(() => alert(name.current), 3000);
  }

  return (
    <>
      <input onChange={handleChange} value={name.current} />
      <h1>Hello {name.current}!</h1>
      <button onClick={handleClick}>Show name</button>
    </>
  );
}

export default GreetingEditor;
