/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import type { ReactNode } from 'react';

interface Comp1Props {
  children: ReactNode;
}

function Comp1({ children }: Comp1Props) {
  return <h1>{children}</h1>;
}
export default Comp1;
