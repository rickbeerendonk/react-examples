/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* eslint-disable react-hooks/exhaustive-deps */

import { useCallback, useState } from 'react';

function GreetingEditor() {
  let mutable = 0;

  const [immutable, setImmutable] = useState(mutable);

  function handleClick() {
    // Don't update variables that come from outside the handler...
    mutable += 1;

    // ...Let alone base new state on this.
    setImmutable(mutable);
  }

  const handleClickCallback = useCallback(handleClick, []);

  return (
    <>
      <button onClick={handleClick}>Change without callback</button>
      <br />
      <button onClick={handleClickCallback}>Change with callback</button>
      <ul>
        <li>v = {immutable}</li>
      </ul>
    </>
  );
}

export default GreetingEditor;
