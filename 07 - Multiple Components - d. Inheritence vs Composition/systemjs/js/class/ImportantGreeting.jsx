/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import Greeting from './Greeting';

// Only if Greeting is a Class Component
class ImportantGreeting extends Greeting {
  render() {
    return <strong>!!! {super.render()} !!!</strong>;
  }
}

export default ImportantGreeting;
