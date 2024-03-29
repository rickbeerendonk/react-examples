/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import For from './For.js';

function App() {
  const names = ['Alexandra', 'Benjamin', 'Charlotte'];

  return (
    <>
      <h1>Greetings</h1>
      <ul>
        <For of={names}>{name => <li key={name}>Hello {name}</li>}</For>
      </ul>
    </>
  );
}

export default App;
