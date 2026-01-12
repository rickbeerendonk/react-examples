/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';

function MyButton({ onClick }) {
  function handleClick() {
    return onClick();
  }

  return <button onClick={handleClick}>Click me!</button>;
}

export default MyButton;
