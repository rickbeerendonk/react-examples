/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import Greeting from './Greeting';
import List from './List';

function SpecialList(props) {
  return (
    <List>
      <Greeting name="first" />
      {props.children}
      <Greeting name="last" />
    </List>
  );
}

export default SpecialList;
