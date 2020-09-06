/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function Greeting() {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    alert('Go to Oblicum...');

    // Must be used in React:
    //e.preventDefault();

    // Cannot be used in React:
    return false;
  }

  return (
    <a onClick={handleClick} href="https://oblicum.com">
      React: oblicum.com
    </a>
  );
}

export default Greeting;
