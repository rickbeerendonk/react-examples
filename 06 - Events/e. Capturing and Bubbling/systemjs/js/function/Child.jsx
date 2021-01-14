/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';

function Child() {
  function handleTarget(event) {
    console.log(`${event.target.id} received event in atTarget phase.`);
  }

  return (
    <div id="child" onClick={handleTarget}>
      Child
    </div>
  );
}

export default Child;
