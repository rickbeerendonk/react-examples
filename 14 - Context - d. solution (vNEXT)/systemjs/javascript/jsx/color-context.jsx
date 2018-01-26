/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

// See: https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
const ColorContext = React.unstable_createContext('black');

ColorContext.Provider = props => {
  return ColorContext.provide(props.value, props.children);
}

ColorContext.Consumer = props => {
  return ColorContext.consume(props.children)
}

export default ColorContext;