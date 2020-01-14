/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface IGreetingProps {
  name: string;
  ref: React.Ref<HTMLHeadingElement>;
}

const Greeting: React.FC<IGreetingProps> = React.forwardRef((props, ref) => (
  <div className="hello">
    <h1 ref={ref}>Hello {props.name}!</h1>
  </div>
));
Greeting.displayName = 'Greeting';

export default Greeting;
