/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useCallback, useState } from 'react';

import LocationForm from './LocationForm.jsx';

export default function App() {
  const [list, setList] = useState([]);

  const add = useCallback(location => {
    // Create a new list by coping the old and adding the new item
    setList(l => [...l, location]);
  }, []);

  return (
    <>
      <LocationForm onAdd={add} />
      <ul>
        {list.map((location, idx) => (
          <li key={idx}>{JSON.stringify(location)}</li>
        ))}
      </ul>
    </>
  );
}
