/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface BottomProps {
  color: string;
}

function Bottom({ color }: BottomProps) {
  return <h1 style={{ color }}>Bottom</h1>;
}

export default Bottom;
