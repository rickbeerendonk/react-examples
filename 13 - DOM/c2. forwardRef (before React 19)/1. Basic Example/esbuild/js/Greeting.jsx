/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { forwardRef } from 'react';

const Greeting = forwardRef((props, ref) => (
  <div className="hello">
    <h1 ref={ref}>Hello {props.name}!</h1>
  </div>
));
Greeting.displayName = 'Greeting';

export default Greeting;
