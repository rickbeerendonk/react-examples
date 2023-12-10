/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { createElement } from 'react';

import Greeting from './Greeting.js';
import List from './List.js';

function SpecialList(props) {
  return createElement(List, null, [
    createElement(Greeting, { key: 'special_first', name: 'first' }),
    ...props.children,
    createElement(Greeting, { key: 'special_last', name: 'last' })
  ]);
}

export default SpecialList;
