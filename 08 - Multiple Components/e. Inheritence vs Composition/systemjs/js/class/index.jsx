/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './Greeting';
import Important from './Important';
import ImportantGreeting from './ImportantGreeting';

ReactDOM.render(
  <React.Fragment>
    {/* Inheritance */}
    <ImportantGreeting name="World" />

    <br />

    {/* Composition */}
    <Important>
      <Greeting name="World" />
    </Important>
  </React.Fragment>,
  document.getElementById('root')
);
