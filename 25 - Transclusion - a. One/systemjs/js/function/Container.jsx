/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

const containerStyle = {
  backgroundColor: 'lightgray',
  padding: 10
};

const contentStyle = {
  backgroundColor: 'white',
  padding: 10
};

function Container({ children }) {
  return (
    <div style={containerStyle}>
      The only item:
      <div style={contentStyle}>{children}</div>
    </div>
  );
}

export default Container;
