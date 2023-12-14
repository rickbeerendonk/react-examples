/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { useLocation, useRouteError } from 'react-router-dom';

function NoMatch() {
  const location = useLocation();
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <h2>Error!</h2>
      <p>{error.statusText || error.message}</p>{' '}
      <p>Location: {JSON.stringify(location)}</p>
    </>
  );
}

export default NoMatch;
