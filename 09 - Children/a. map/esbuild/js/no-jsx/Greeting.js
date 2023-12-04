/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement } from 'react';

const Greeting = props => createElement('i', null, 'Hello ', props.name, '!');

export default Greeting;
