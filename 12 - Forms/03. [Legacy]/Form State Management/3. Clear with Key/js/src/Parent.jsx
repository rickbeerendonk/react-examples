/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { useCallback, useState } from 'react';

import ChildWithForm from './ChildWithForm.jsx';

function Parent() {
  const [list, setList] = useState([]);

  const handleAdd = useCallback(item => {
    // Create a new list by coping the old and adding the new item
    setList(l => [...l, item]);
  }, []);

  return (
    <>
      <ChildWithForm onAdd={handleAdd} key={list.length} />
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Parent;
