/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

const styles = {
  header: {
    background: '#444',
    color: 'orchid',
    fontStyle: 'italic', // font-style in CSS
    marginTop: '75px' // margin-top in CSS
  }
};

function Greeting({ style }) {
  return <h1 style={{ ...styles.header, ...style }}>Hello World!</h1>;
  /* React Native: <h1 style={[styles.header, style]}>Hello World!</h1> */
}

export default Greeting;
