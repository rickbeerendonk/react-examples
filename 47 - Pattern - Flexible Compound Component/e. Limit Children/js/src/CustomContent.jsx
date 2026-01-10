/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { use } from 'react';

import { GreetingContext } from './GreetingEditor.jsx';

function CustomContent() {
  const context = use(GreetingContext);

  // Error when used outside of GreetingEditor.
  if (!context) {
    throw new Error('CustomContent must be used within a GreetingEditor');
  }

  return (
    <h2>
      <u>Hi {context.name}</u>
    </h2>
  );
}

export default CustomContent;
