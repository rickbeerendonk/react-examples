/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import GreetingWithExtras from './GreetingWithExtras';
import FooWithExtras from './FooWithExtras';

function App() {
  return (
    <React.Fragment>
      <GreetingWithExtras extraColor="red" name="World" />
      <FooWithExtras extraColor="green" />
    </React.Fragment>
  );
}

export default App;
