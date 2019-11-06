/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import ChildWithForm from './ChildWithForm';

function Parent() {
  const [list, setList] = React.useState([]);

  const add = React.useCallback(
    item => {
      // Create a new list by coping the old and adding the new item
      setList(l => [...l, item]);
    },
    [setList]
  );

  return (
    <React.Fragment>
      <ChildWithForm onAdd={add} />
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Parent;
