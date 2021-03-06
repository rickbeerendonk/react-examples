/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

/* eslint-disable react-hooks/exhaustive-deps */

function GreetingEditor() {
  let mutable = 0;

  const [immutable, setImmutable] = React.useState(mutable);

  function handleClick() {
    // Don't update variables that come from outside the handler...
    mutable += 1;

    // ...Let alone base new state on this.
    setImmutable(mutable);
  }

  const handleClickCallback = React.useCallback(handleClick, []);

  return (
    <React.Fragment>
      <button onClick={handleClick}>Change without callback</button>
      <br />
      <button onClick={handleClickCallback}>Change with callback</button>
      <ul>
        <li>v = {immutable}</li>
      </ul>
    </React.Fragment>
  );
}

export default GreetingEditor;
