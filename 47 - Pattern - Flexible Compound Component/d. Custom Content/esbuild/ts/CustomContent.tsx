/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useContext } from 'react';

import { GreetingContext } from './GreetingEditor.tsx';

function CustomContent() {
  const context = useContext(GreetingContext);

  return (
    <h2>
      <u>Hi {context.name}</u>
    </h2>
  );
}

export default CustomContent;
