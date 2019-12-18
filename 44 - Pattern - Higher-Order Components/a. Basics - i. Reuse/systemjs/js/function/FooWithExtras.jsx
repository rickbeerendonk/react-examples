/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Foo from './Foo';
import { withExtras } from './hoc';

const FooWithExtras = withExtras(Foo);

export default FooWithExtras;
