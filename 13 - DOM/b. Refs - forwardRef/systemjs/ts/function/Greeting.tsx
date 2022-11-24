/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface GreetingProps {
  name: string;
  ref: React.Ref<HTMLHeadingElement>;
}

const Greeting = React.forwardRef<any, GreetingProps>((props, ref) => (
  <div className="hello">
    <h1 ref={ref}>Hello {props.name}!</h1>
  </div>
));
Greeting.displayName = 'Greeting';

export default Greeting;
