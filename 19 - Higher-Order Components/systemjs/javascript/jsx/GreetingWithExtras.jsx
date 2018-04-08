/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import Greeting from './Greeting';
import { withExtras } from './hoc';

const GreetingWithExtras = withExtras(Greeting);

export default GreetingWithExtras;
