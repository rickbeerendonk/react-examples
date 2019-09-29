/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { useParams } from 'react-router-dom';

// Without hooks

function Page({ match }) {
  return <h2>Page {match.params.id}</h2>;
}

// With hooks

export function PageWithHooks() {
  const { id } = useParams();
  return <h2>Page {id} - with hooks</h2>;
}

export default Page;
