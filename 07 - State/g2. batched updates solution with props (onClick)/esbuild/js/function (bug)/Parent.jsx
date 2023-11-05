/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import ClickMe from './ClickMe.jsx';

function Parent() {
  const [value, setValue] = React.useState(0);

  //debugger;

  return <ClickMe value={value} setValue={setValue} />;
}

export default Parent;
