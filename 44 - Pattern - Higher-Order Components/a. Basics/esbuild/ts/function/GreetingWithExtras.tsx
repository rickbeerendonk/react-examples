/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Greeting from './Greeting.tsx';
import { withExtras } from './hoc.tsx';

const GreetingWithExtras = withExtras(Greeting);

export default GreetingWithExtras;
