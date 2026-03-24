/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { useState } from 'react';

import ChildWithForm from './ChildWithForm.jsx';

function Parent() {
  const [list, setList] = useState([]);

  function handleAdd(item) {
    // Create a new list by coping the old and adding the new item
    setList(lst => [...lst, item]);
  }

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

export default Parent;
