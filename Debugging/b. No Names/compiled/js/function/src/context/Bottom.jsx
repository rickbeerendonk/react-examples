/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import ColorContext from './ColorContext';

export default function () {
  return (
    <ColorContext.Consumer>
      {context => <h2 style={{ color: context.color }}>Bottom</h2>}
    </ColorContext.Consumer>
  );
}
