/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import ColorContext from './ColorContext';

function Bottom() {
  return (
    <ColorContext.Consumer>
      {context => <h1 style={{ color: context.color }}>Bottom</h1>}
    </ColorContext.Consumer>
  );
}

export default Bottom;
