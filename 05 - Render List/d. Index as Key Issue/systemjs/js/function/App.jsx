/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

function App() {
  const [items, setItems] = React.useState(['one', 'two', 'three']);

  function insertTop() {
    setItems(i => [i.length + 1, ...i]);
  }

  return (
    <React.Fragment>
      <p style={{ color: 'gray' }}>
        Add some text in an input and observe what happens if you click the
        button.
      </p>

      <button onClick={insertTop}>Insert at Top</button>

      <ul>
        {
          // Prefer map (instead of for-loops):
          items.map((item, index) => (
            <li key={index}>
              <input placeholder={item} />
            </li>
          ))
        }
      </ul>
    </React.Fragment>
  );
}

export default App;
