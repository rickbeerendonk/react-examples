/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import type { ReactNode } from 'react';

interface Comp3Props {
  children: ReactNode;
}

function Comp3({ children }: Comp3Props) {
  return <h3>{children}</h3>;
}
export default Comp3;
