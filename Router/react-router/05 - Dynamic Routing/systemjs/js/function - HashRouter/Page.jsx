/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { useParams } from 'react-router-dom';

// Without hooks
// <= version 5

export function PageLegacy({ match }) {
  if (!match) {
    return null;
  }

  return <h2>Page Legacy {match.params.id}</h2>;
}

// With hooks
// >= version 5.1

export function Page() {
  const { id } = useParams();
  return <h2>Page {id}</h2>;
}
