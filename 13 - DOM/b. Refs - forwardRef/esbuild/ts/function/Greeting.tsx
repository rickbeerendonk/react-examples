/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Ref, forwardRef } from 'react';

interface GreetingProps {
  name: string;
  ref: Ref<HTMLHeadingElement>;
}

const Greeting = forwardRef<any, GreetingProps>((props, ref) => (
  <div className="hello">
    <h1 ref={ref}>Hello {props.name}!</h1>
  </div>
));
Greeting.displayName = 'Greeting';

export default Greeting;
