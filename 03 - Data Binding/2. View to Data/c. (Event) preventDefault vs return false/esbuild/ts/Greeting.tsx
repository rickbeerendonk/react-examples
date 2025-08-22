/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import type { MouseEvent } from 'react';

export default function App() {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
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
