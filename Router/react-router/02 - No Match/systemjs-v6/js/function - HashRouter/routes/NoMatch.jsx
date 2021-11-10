/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { useLocation } from 'react-router-dom';

function NoMatch() {
  let location = useLocation();

  return (
    <>
      <h2>No match!</h2>
      <p>Location: {JSON.stringify(location)}</p>
    </>
  );
}

export default NoMatch;
