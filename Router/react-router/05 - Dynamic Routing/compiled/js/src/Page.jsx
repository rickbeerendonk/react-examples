/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { useParams } from 'react-router-dom';

export function Page() {
  const { id } = useParams();
  return <h2>Page {id} </h2>;
}
