/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function MyComponent() {
  function handleClicked() {
    React.warn('This is a custom warning (without Component Stack).');
    React.error('This is a custom error (without Component Stack).');
    alert('Done.');
  }

  return (
    <h1 onClick={handleClicked}>
      Check the console to see a warning and an error <u>without</u> a component
      call stack.
    </h1>
  );
}

export default MyComponent;