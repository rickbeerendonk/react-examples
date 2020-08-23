/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';
import { Prompt } from 'react-router-dom';

function Page1() {
  return (
    <React.Fragment>
      <Prompt
        when={true}
        message={(location, action) => {
          return location.pathname === '/page2' && action === 'PUSH';
        }}
      />

      <h2>1st page (with prompt)</h2>
    </React.Fragment>
  );
}

export default Page1;
