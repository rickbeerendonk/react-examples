/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

import { GreetingContext } from './GreetingEditor';

function CustomContent() {
  const context = React.useContext(GreetingContext);

  return (
    <h2>
      <u>Hi {context.name}</u>
    </h2>
  );
}

export default CustomContent;
