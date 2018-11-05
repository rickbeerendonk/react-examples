/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

function ImportantAnchor({ children, ...otherProps }) {
  return <a {...otherProps}>!!! {children} !!!</a>;
}

export default ImportantAnchor;
