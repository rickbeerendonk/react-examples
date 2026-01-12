/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import type { ReactNode } from 'react';

const containerStyle = {
  backgroundColor: 'lightgray',
  padding: 10
};

const contentStyle = {
  backgroundColor: 'white',
  padding: 10
};

interface ContainerProps {
  slot1: ReactNode;
  slot2: ReactNode;
}

function Container({ slot1, slot2 }: ContainerProps) {
  return (
    <div style={containerStyle}>
      The 1st item:
      <div style={contentStyle}>{slot1}</div>
      The 2nd item:
      <div style={contentStyle}>{slot2}</div>
    </div>
  );
}

export default Container;
