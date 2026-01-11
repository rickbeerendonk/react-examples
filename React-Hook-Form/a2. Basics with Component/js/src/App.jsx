/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { useCallback, useState } from 'react';
import ChildWithForm from './ChildWithForm.jsx';

export default function App() {
  const [list, setList] = useState([]);

  const handleAdd = useCallback(item => {
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
