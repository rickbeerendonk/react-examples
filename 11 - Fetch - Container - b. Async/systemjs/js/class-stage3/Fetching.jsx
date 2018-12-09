/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function Fetching() {
  return (
    <React.Fragment>
      <img
        src="../../../../resources/oblicum-square.svg"
        className="oblicum-spinner"
        alt="Fetching..."
      />
      Fetching...
    </React.Fragment>
  );
}

export default Fetching;
