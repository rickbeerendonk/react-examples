/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Greeting from './Greeting.jsx';
import { withExtras } from './hoc.jsx';

const GreetingWithExtras = withExtras(Greeting);

export default GreetingWithExtras;
