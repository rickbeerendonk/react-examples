/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function Greeting() {
  function handleChanged(e: React.SyntheticEvent<HTMLInputElement>) {
    // Events are pooled. To prevent properties from resetting, remove the
    // event from the pool by calling event.persist(). See error in console.
    e.persist();

    function showHandled() {
      const target = e.target as HTMLInputElement;
      alert(`Event handled.
Target: ${target}
Value: ${target.value}`);
    }

    setTimeout(showHandled, 1000);
  }

  return <input onChange={handleChanged} value="Hello World!" />;
}

export default Greeting;
