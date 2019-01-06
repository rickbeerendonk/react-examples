/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function Page({ match }) {
  return <h2>Page {match.params.id}</h2>;
}

export default Page;
