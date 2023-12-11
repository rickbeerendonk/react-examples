/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import React from 'react';

import ChildWithForm from './ChildWithForm.tsx';

function App() {
  const [list, setList] = React.useState(new Array<string>());

  const handleAdd = React.useCallback((item: string) => {
    // Create a new list by coping the old and adding the new item
    setList(l => [...l, item]);
  }, []);

  return (
    <>
      <ChildWithForm onAdd={handleAdd} />
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
