/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { useOptimistic, useState, useRef } from 'react';

import GreetingEditor from './GreetingEditor.jsx';

function App() {
  const [name, setName] = useState('World');

  async function sendName(newName) {
    // Simulate sending this to the server and getting response
    await new Promise(resolve => setTimeout(resolve, 1000));
    setName(newName);
  }
  return (
    <>
      <GreetingEditor name={name} sendName={sendName} />
      <p>
        <b>Parent name:</b> {name}
      </p>
    </>
  );
}

export default App;
