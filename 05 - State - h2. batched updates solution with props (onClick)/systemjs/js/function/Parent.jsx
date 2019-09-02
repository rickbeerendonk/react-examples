/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import ClickMe from './ClickMe';

function Parent() {
  const [value, setValue] = React.useState(0);

  return <ClickMe onValueChange={setValue} value={value} />;
}

export default Parent;
