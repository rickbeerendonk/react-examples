/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { memo } from 'react';

import ColorContext from './ColorContext.jsx';

function Bottom() {
  return (
    <ColorContext.Consumer>
      {context => <h1 style={{ color: context.color }}>Bottom</h1>}
    </ColorContext.Consumer>
  );
}

export default memo(Bottom);
