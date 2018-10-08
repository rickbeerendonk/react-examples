/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

const styles = {
  header: {
    background: '#444',
    color: 'orchid',
    fontStyle: 'italic', // font-style in CSS
    marginTop: '75px' // margin-top in CSS
  }
};

const Greeting = props => (
  // See: https://github.com/tc39/proposal-object-rest-spread
  <h1 style={{ ...styles.header, ...props.style }}>Hello World!</h1>
);
/* React Native: <h1 style={[styles.header, props.style]}>Hello World!</h1> */

export default Greeting;
