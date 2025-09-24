/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { use } from 'react';
import ColorContext from './color-context.tsx';

interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  const context = use(ColorContext);
  return <h1 style={{ color: context.color }}>Hello {name}!</h1>;
}

export default Greeting;
