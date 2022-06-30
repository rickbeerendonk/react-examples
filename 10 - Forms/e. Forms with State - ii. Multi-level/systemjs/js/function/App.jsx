/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

import LocationForm from './LocationForm';

function App() {
  const [list, setList] = React.useState([]);

  const add = React.useCallback(location => {
    // Create a new list by coping the old and adding the new item
    setList(l => [...l, location]);
  }, []);

  return (
    <React.Fragment>
      <LocationForm onAdd={add} />
      <ul>
        {list.map((location, idx) => (
          <li key={idx}>{JSON.stringify(location)}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
