/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import Middle from './Middle';

interface TopProps {
  color: string;
}

function Top({ color }: TopProps) {
  return <Middle color={color} />;
}

export default Top;
