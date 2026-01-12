/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import ColorContext from './ColorContext.js';
import Middle from './Middle.jsx';

function Top(props) {
  return (
    <ColorContext value={{ color: props.color }}>
      <Middle />
    </ColorContext>
  );
}

export default Top;
