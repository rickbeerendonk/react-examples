/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { use } from 'react';

import { GreetingContext } from './GreetingEditor.tsx';

function CustomContent() {
  const context = use(GreetingContext);

  return (
    <h2>
      <u>Hi {context.name}</u>
    </h2>
  );
}

export default CustomContent;
