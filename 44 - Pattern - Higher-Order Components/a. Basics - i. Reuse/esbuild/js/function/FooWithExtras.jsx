/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Foo from './Foo.jsx';
import { withExtras } from './hoc.jsx';

const FooWithExtras = withExtras(Foo);

export default FooWithExtras;
