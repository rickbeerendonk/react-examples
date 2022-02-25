/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import useBoolean from './hooks/boolean-hook';

function Main() {
  const [value, toggleValue] = useBoolean(true);

  function handleClick() {
    toggleValue();
  }

  return (
    <React.Fragment>
      <button onClick={handleClick}>{value ? 'Hide' : 'Show'}</button>
      {value && <h1>Click the button to hide this text.</h1>}
    </React.Fragment>
  );
}

export default Main;
