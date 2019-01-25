/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { Prompt } from 'react-router-dom';

function Page1() {
  return (
    <React.Fragment>
      <Prompt when={true} message="Are you sure you want to leave?" />

      <h2>1st page (with prompt)</h2>
    </React.Fragment>
  );
}

export default Page1;
