/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import GreetingWithExtras from './GreetingWithExtras';

class App extends React.Component {
  render() {
    return <GreetingWithExtras extraColor="red" name="World" />;
  }
}

export default App;
