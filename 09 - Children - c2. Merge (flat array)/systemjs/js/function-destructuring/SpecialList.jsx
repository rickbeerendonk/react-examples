/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import Greeting from './Greeting';
import List from './List';

function SpecialList({ children }) {
  return (
    <List>
      {[
        <Greeting key="special_first" name="first" />,
        ...children,
        <Greeting key="special_last" name="last" />
      ]}
    </List>
  );
}

export default SpecialList;
