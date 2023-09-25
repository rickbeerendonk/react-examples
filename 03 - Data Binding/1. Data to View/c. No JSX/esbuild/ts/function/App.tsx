/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createElement, Fragment } from 'react';

const App = () => {
  const name = 'React';

  return createElement(
    Fragment,
    null,
    createElement('input', { value: name }),
    createElement('h1', null, 'Hello ', name, '!')
  );
};

export default App;
