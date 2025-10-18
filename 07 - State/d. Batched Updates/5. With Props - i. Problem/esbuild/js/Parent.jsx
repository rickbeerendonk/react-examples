/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

import ClickMe from './ClickMe.jsx';

function Parent() {
  const [value, setValue] = useState(0);

  return <ClickMe value={value} setValue={setValue} />;
}

export default Parent;
