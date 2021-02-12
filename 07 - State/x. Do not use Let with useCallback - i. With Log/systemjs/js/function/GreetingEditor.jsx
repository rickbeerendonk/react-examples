/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

/* eslint-disable react-hooks/exhaustive-deps */

/// Globals for Logging
let renderCount = 1;
let renderValues = { immutable: null };
///

function GreetingEditor() {
  let mutable = 0;

  const [immutable, setImmutable] = React.useState(mutable);

  /// Logging
  let renderNo;
  if (renderValues.immutable != immutable) {
    renderNo = renderCount++;
    renderValues = { immutable };
    console.log(`Render no ${renderNo}:
    mutable=${mutable}, immutable=${immutable}`);
  }
  ///

  function handleClick() {
    console.log(`handleClick of render no ${renderNo}:
    OLD: mutable=${mutable}, immutable=${immutable}
    NEW: mutable=${mutable + 1}, setImmutable(${mutable + 1})`);

    mutable += 1;
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
