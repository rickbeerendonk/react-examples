/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Greeting from './Greeting.js';
import { withExtras } from './hoc.js';

const GreetingWithExtras = withExtras(Greeting);

export default GreetingWithExtras;
