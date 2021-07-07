/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import { useState } from 'react';
import Greeting from './Greeting';
import EditBox from './EditBox';

export default function (props) {
  const [name, setName] = useState(props.name);

  return (
    <>
      <EditBox onChange={setName} value={name} />
      <Greeting name={name} />
    </>
  );
}
