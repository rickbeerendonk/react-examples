/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';

import ChildWithForm from './ChildWithForm';

function Parent() {
  const [list, setList] = React.useState([]);

  const handleAdd = React.useCallback(item => {
    // Create a new list by coping the old and adding the new item
    setList(l => [...l, item]);
  }, []);

  return (
    <React.Fragment>
      <ChildWithForm onAdd={handleAdd} key={list.length} />
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Parent;
