/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

/* eslint-disable react-hooks/exhaustive-deps */

function GreetingEditor() {
  let v = 0;

  // 1. Initial state is either static, or a prop value
  const [vNew, setVNew] = React.useState(v);

  function handleClick() {
    // 2a. Don't update variables that come from outside the handler...
    v -= 1;

    // 2b. ...Let alone base new state on this
    setVNew(v);
  }

  const handleClickCallback = React.useCallback(handleClick, []);

  return (
    <React.Fragment>
      <button onClick={handleClick}>Change without callback</button>
      <br />
      <button onClick={handleClickCallback}>Change with callback</button>
      <ul>
        <li>v = {vNew}</li>
      </ul>
    </React.Fragment>
  );
}

export default GreetingEditor;
