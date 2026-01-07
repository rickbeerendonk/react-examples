/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Fragment } from 'react';
import { jsx } from 'react/jsx-runtime';

export default function App() {
  const name = 'React';

  return jsx(Fragment, {
    children: [
      jsx('input', { value: name }),
      jsx('h1', { children: ['Hello ', name, '!'] })
    ]
  });
}
