/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

const Greeting: React.SFC = () => {
  const changed = (e: React.SyntheticEvent<HTMLInputElement>) => {
    // Events are pooled. To prevent properties from resetting, remove the
    // event from the pool by calling event.persist(). See error in console.
    e.persist();

    const showHandled = () => {
      const target = e.target as HTMLInputElement;
      alert(`Event handled.
Target: ${target}
Value: ${target.value}`);
    };

    setTimeout(showHandled, 1000);
  };

  return <input onChange={changed} value="Hello World!" />;
};

export default Greeting;
