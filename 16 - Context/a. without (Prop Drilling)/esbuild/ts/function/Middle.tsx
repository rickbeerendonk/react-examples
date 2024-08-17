/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Bottom from './Bottom.tsx';

interface MiddleProps {
  color: string;
}

function Middle({ color }: MiddleProps) {
  return <Bottom color={color} />;
}

export default Middle;
